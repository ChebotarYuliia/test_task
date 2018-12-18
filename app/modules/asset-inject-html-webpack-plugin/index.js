var path = require('path');

/**
 * <!-- <type>_inject_point[ <ex-type>_<ex-name>][ if_<arg>] -->
 * type: js | css
 * ex-type: chunk | asset | text | inline
 * ex-name: *
 * arg: *
 */
var RE_INJECT_POINT  = /{{!\s*(js|css)_inject_point((?:_|\s+)(text)_(\S+))?(\s+if_(\S+)\s*)?\s*!}}/gi

function AssetInjectHTMLWebpackPlugin(options) {
    this.options = Object.assign({
        texts: null
    }, options)
}

AssetInjectHTMLWebpackPlugin.prototype.apply = function (compiler) {
    var self = this;
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginArgs, callback) {
            try {
                htmlPluginArgs.html = htmlPluginArgs.html.replace(
                    RE_INJECT_POINT,
                    function (match, type, ex, exType, exName, ifMatch, ifArg) {
                        return self.replaceInjectPoint(compilation, htmlPluginArgs, {
                            match: match,
                            type: type,
                            ex: ex,
                            exType: exType,
                            exName: exName,
                            ifArg: ifMatch ? ifArg : null
                        })
                    }
                );
                callback(null, htmlPluginArgs)
            } catch (e) {
                callback(e)
            }
        })
    })
};

AssetInjectHTMLWebpackPlugin.prototype.replaceInjectPoint = function (compilation, htmlPluginArgs, match) {
    var args = this.options.args;
    var texts = this.options.texts;

    // do not replace if arg value not `true` in options.args
    if (match.ifArg && (!args || !args[match.ifArg])) {
        return ''
    }

    switch (match.exType) {
        case 'text':
            var text = texts && texts[match.exName];
            if (text) {
                return text
            } else {
                throw new Error('can not find text: ' + match.exName + ', from: ' + match.match)
            }
        default:
            throw new Error('unsupported type: ' + match.exType + ', from: ' + match.match)
    }
};

module.exports = AssetInjectHTMLWebpackPlugin;