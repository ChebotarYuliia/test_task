'use strict';

var $ = require('jquery');

require('./chosen/chosen.jquery.js');
require('./chosen/chosen.css');
require('./index.scss');

module.exports = function() {
  $('.chosen-select').each(function() {
    var $this = $(this);
    var settings = {};
    if (typeof $this.data('chosen-settings') == 'object') {
      settings = $this.data('chosen-settings');
    }

    $(this).chosen(settings);
  });
};
