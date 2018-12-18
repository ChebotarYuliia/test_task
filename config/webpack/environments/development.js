'use strict';

/**
 * Development config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of development settings
 */
module.exports = function(_path) {
  return {
    context: _path,
    debug: true,
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      info: true,
      hot: true,
      inline: true
    },
    module: {
      preLoaders: [
        {
          test: /\.styl$/,
          loader: 'stylint'
        },
        {
          test: /\.js$/,
          loader: 'eslint'
        }
      ]
    }
  };
};
