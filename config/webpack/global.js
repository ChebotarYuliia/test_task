'use strict';

var domain = ''; // домен сайта
var ab = ''; // a, b или ничего
var ab_dir = '/2/'; // директория для AB-теста

// Depends
var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var Manifest = require('manifest-revision-webpack-plugin');
var TextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlPlugin = require('html-webpack-plugin');
var AssetInjectHtmlWebpackPlugin = require('../../app/modules/asset-inject-html-webpack-plugin');

/**
 * Global webpack config
 * @param  {[type]} _path [description]
 * @return {[type]}       [description]
 */
module.exports = function (_path, ENV) {
  // define local variables
  var dependencies = Object.keys(require(_path + '/package').dependencies);
  var rootAssetPath = _path + 'app';

  // return objecy
  var webpackConfig = {
    // Точки входа
    entry: {
      application: _path + '/app/app.js',
      vendors: dependencies
    },

    // Файлы вывода
    output: {
      path: path.join(_path, 'dist'),
      chunkFilename: '[id].bundle.[chunkhash].js',
      publicPath: ab == 'b' ? ab_dir : '/'
    },

    // resolves modules
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules'],
      alias: {
        _svg: path.join(_path, 'app', 'assets', 'svg'),
        _fonts: path.join(_path, 'app', 'assets', 'fonts'),
        _modules: path.join(_path, 'app', 'modules'),
        _images: path.join(_path, 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'app', 'assets', 'stylesheets'),
        _templates: path.join(_path, 'app', 'assets', 'templates')
      }
    },

    // modules resolvers
    module: {
      loaders: [
        {
          test: /\.html$/,
          loaders: [
            'html-loader?attrs=img:src link:href img:data-src img:data-mfp-src a:data-mfp-src  span:data-src  source:src img:data-lazy',
            'purifycss-loader'
          ]
        },
        {
          loader: 'babel',
          test: /\.js$/,
          query: {
            presets: ['es2015'],
            ignore: ['node_modules', 'bower_components']
          }
        }
      ]
    },

    // post css
    postcss: [autoprefixer({ browsers: ['last 5 versions'] })],

    sassLoader: {
      outputStyle: 'expanded',
      sourceMap: 'true'
    },

    // load plugins
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(
        'vendors',
        'assets/js/vendors.[hash].js'
      ),
      new TextPlugin('assets/css/[name].[chunkhash].css'),
      new Manifest(path.join(_path + '/config', 'manifest.json'), {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['.DS_Store']
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new AssetInjectHtmlWebpackPlugin({
        texts: {
          ab:
            ENV == 'production' && ab == 'a'
              ? "<?php if((!isset($_COOKIE['AB']) && rand(0, 1)) || (isset($_COOKIE['AB']) && $_COOKIE['AB'] == 2)) { SetCookie('AB','2',time()+3600*24*365); $ref = $_SERVER['QUERY_STRING']; if ($ref != '') $ref = '?' . $ref; header('HTTP/1.1 301 Moved Permanently'); header('Location:http://" +
              domain +
              ab_dir +
              "' . $ref); exit();  }else{ SetCookie('AB','1',time()+3600*24*365); } ?>"
              : ' ',
          utm:
            ENV == 'production'
              ? '<?=!empty($_GET["utm_campaign"])?str_replace(array("_poisk", "_kms", "-poisk_g", "-kms"), "", $_GET["utm_campaign"]):""?>'
              : ' ',
          date: ENV == 'production' ? '<?=date("t.m.Y")?>' : '06.09.2018'
        }
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('../../app/vendor/vendor-manifest.json')
      })
    ]
  };

  if (ENV == 'production') {
    webpackConfig.devtool = 'nosources-source-map';

    webpackConfig.plugins[webpackConfig.plugins.length] = new TextPlugin(
      'assets/css/[name].[chunkhash].css'
    );

    webpackConfig.plugins[webpackConfig.plugins.length] = new HtmlPlugin({
      title: 'Landing',
      chunks: ['application', 'vendors'],
      filename: 'index.html',
      template: path.join(
        _path,
        'app',
        'assets',
        'templates',
        'layouts',
        'index.html'
      )
    });

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.scss$/,
      loader: TextPlugin.extract('style', 'css!sass!')
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.(css|ico|png)$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.(ttf|eot)(\?[a-z0-9=&.]+)?$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.svg(\?[a-z0-9=&.]+)?$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]',
        'image-webpack-loader?{optimizationLevel: 8, interlaced: false, pngquant:{quality: "80-90", speed: 4}, mozjpeg: {quality: 80}}'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.(gif|jpe?g)$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]',
        'image-webpack-loader?{optimizationLevel: 8, interlaced: false, pngquant:{quality: "80-90", speed: 4}, mozjpeg: {quality: 80}}'
      ]
    };
  } else {
    webpackConfig.cache = true;
    webpackConfig.devtool = 'eval';

    webpackConfig.plugins[webpackConfig.plugins.length] = new HtmlPlugin({
      title: 'Landing',
      chunks: ['application', 'vendors'],
      filename: 'index.html',
      template: path.join(
        _path,
        'app',
        'assets',
        'templates',
        'layouts',
        'index.html'
      )
    });

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.(css|ico|png|jpg|jpeg|gif)$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.module.loaders[webpackConfig.module.loaders.length] = {
      test: /\.(ttf|eot|svg)(\?[a-z0-9=&.]+)?$/i,
      loaders: [
        'url-loader?limit=4096&context=' +
        rootAssetPath +
        '&name=assets/static/[ext]/[name]_[hash].[ext]'
      ]
    };

    webpackConfig.plugins[
      webpackConfig.plugins.length
    ] = new webpack.HotModuleReplacementPlugin();

    webpackConfig.output.publicPath = 'http://localhost:88/';
  }

  var templates = glob.sync(_path + '/app/assets/templates/layouts/*.html');

  for (var temp in templates) {
    var template = templates[temp].replace(
      path
        .join(_path, 'app', 'assets', 'templates', 'layouts/')
        .replace(/\\/g, '/'),
      ''
    );
    webpackConfig.plugins[webpackConfig.plugins.length] = new HtmlPlugin({
      title: 'Landing',
      chunks: ['application', 'vendors'],
      filename: template,
      template: path.join(
        _path,
        'app',
        'assets',
        'templates',
        'layouts',
        template
      )
    });
  }

  return webpackConfig;
};
