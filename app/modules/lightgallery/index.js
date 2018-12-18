'use strict';

require('../../../node_modules/lightgallery/src/sass/lightgallery.scss');

var $ = require('jquery');
require('lightgallery');
// require('lg-thumbnail');
// require('lg-autoplay');
// require('lg-video');
// require('lg-fullscreen');
// require('lg-pager');
// require('lg-zoom');
// require('lg-hash');
// require('lg-share');

module.exports = function() {
  $('.lightgallery').each(function() {
    var $this = $(this);
    var settings = {};
    if (typeof $this.data('lightgallery-settings') == 'object') {
      settings = $this.data('lightgallery-settings');
    }

    $(this).lightGallery(settings);
  });
};
