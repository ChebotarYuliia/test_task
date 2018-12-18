var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'bootstrap',
            'sweetalert2',
            'chosen-js',
            'slick-carousel',
            'magnific-popup',
            'jscrollpane',
            'lightgallery',
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './app/modules/blanks/index.scss',
            './app/modules/chosen',
            './app/modules/fancybox',
            './app/modules/fancyselect',
            './app/modules/forms',
            './app/modules/jscrollpane',
            './app/modules/jslider',
            './app/modules/lightgallery',
            './app/modules/popup',
            './app/modules/slider',
        ]
    },
    output: {
        path: path.join(__dirname, '/app/vendor'),
        filename: '[name].bundle.js',
        library: 'vendor_lib'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(css|ico|png|jpg|jpeg|gif)$/i,
                loaders: ['url-loader?limit=4096&context=/app&name=assets/static/[ext]/[name]_[hash].[ext]']
            }
        ],
        noParse: /node_modules/
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_lib',
            path: path.join(__dirname, '/app/vendor/vendor-manifest.json')
        })
    ]
};