'use strict';

var $ = require('jquery');
require('slick-carousel');
require('../../../node_modules/slick-carousel/slick/slick.scss');

module.exports = function() {
  $('.slick-slider').each(function() {
    var $this = $(this);
    if ($this.parents('.hidden').length == 0) {
      $this.slick();
    }
  });
};
