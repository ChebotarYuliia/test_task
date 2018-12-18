'use strict';

require('./jquery.fancybox.min.scss');

window.jQuery = require('jquery');
require('./jquery.fancybox.min');

module.exports = function() {
  $('.fancybox').fancybox();
};
