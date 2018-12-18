'use strict';

let formsClass = 'form';

var $ = require('jquery');
var swal = require('sweetalert2');
require('chosen-js');
require('../../../node_modules/jquery.maskedinput/src/jquery.maskedinput');

require('./index.scss');

module.exports = function() {
  /**
   * Сбор данных из формы
   *
   * @param options
   * @returns {*}
   */
  $.fn.formData = function(options) {
    if (this === undefined) {
      return 'error';
    }

    var settings = $.extend(
      {
        select_attr: 'name',
        textvalue: false,
        validator: false,
        invalid: false,
        valid: false,
        callback: false
      },
      options
    );

    var send_obj = {};

    var put = function(key, val, title, obj) {
      if (
        key.indexOf('[]') > -1 &&
        key[key.length - 1] === ']' &&
        key[key.length - 2] === '['
      ) {
        key = key.replace('[]', '');

        if (
          send_obj[key] !== undefined &&
          Object.prototype.toString.call(send_obj[key]) === '[object Array]'
        ) {
          send_obj[key].push({ val: val, title: title, obj: obj });
        } else {
          send_obj[key] = [{ val: val, title: title, obj: obj }];
        }
      } else {
        send_obj[key] = { val: val, title: title, obj: obj };
      }
      obj.rules = getValidateRules(obj);

      if (settings.validator === false) settings.validator = {};

      for (var rule in obj.rules) {
        if (typeof settings.validator[key] == 'undefined')
          settings.validator[key] = [];
        settings.validator[key][settings.validator[key].length] = rule;
      }
    };

    var getValidateRules = function(obj) {
      var data = obj.data(),
        rules = {},
        dataKey;
      for (dataKey in data) {
        if (dataKey.indexOf('validate') === 0) {
          rules[dataKey.replace('validate', '').toLowerCase()] = data[dataKey];
        }
      }

      return rules;
    };

    // get text/hidden input and textarea
    var txt = $(
      'textarea:enabled, input[type=hidden]:enabled, input[type!=checkbox][type!=radio]:enabled',
      this
    );

    $.each(txt, function(i, j) {
      if (
        $(j).attr(settings.select_attr) !== undefined &&
        $(j).not(':disabled')
      ) {
        put(
          $(j).attr(settings.select_attr),
          $(j).val(),
          $(j).data('title'),
          $(j)
        );
      }
    });

    // get select
    var select = $('select:enabled', this);

    $.each(select, function(i, j) {
      if (
        $(j).attr(settings.select_attr) !== undefined &&
        $(j).not(':disabled')
      ) {
        if (settings.textvalue === true) {
          put(
            $(j).attr(settings.select_attr),
            $(j)
              .children('option:selected')
              .text(),
            $(j).data('title'),
            $(j)
          );
        } else {
          put(
            $(j).attr(settings.select_attr),
            $(j).val(),
            $(j).data('title'),
            $(j)
          );
        }
      }
    });

    // get checkboxes
    var checkBox = $('input[type=checkbox]:enabled');

    // TODO реализовать множественный выбор
    $.each(checkBox, function(i, j) {
      put($(j).attr('name'), $(j).attr('value'), $(j).data('title'), $(j));
    });

    // get radiobuttons
    var radio = $('input[type=radio]:checked:enabled');

    $.each(radio, function(i, j) {
      put($(j).attr('name'), $(j).attr('value'), $(j).data('title'), $(j));
    });

    // validation  ==============================================
    var checkValid = function(val, rule) {
      var re;

      switch (rule) {
        case 'required':
          return !(val === undefined || val.length < 2);

        case 'email':
          re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(val);

        case 'phone':
          re = /^\+?[-\(\)\d\s]{5,19}$/;
          return re.test(val);

        case 'uaphone':
          re = /\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
          return re.test(val);

        case 'ruphone':
          re = /\+7 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
          return re.test(val);

        case 'url':
          re = /^(https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)*?$/;
          return re.test(val);

        case 'alpha':
          re = /^[a-zA-Z]+$/;
          return re.test(val);

        case 'alpha_num':
          re = /^[a-zA-Z0-9]+$/;
          return re.test(val);

        case 'alpha_dash':
          re = /^[-_a-zA-Z0-9]+$/;
          return re.test(val);
      }

      if (rule.indexOf(':') > -1) {
        rule = rule.split(':');

        switch (rule[0]) {
          case 'len':
            return rule.slice(1, rule.length).some(function(el) {
              return val.length == el;
            });

          case 'range_len':
            return val.length >= rule[1] && val.length <= rule[2];

          case 'max':
            return val <= rule[1];

          case 'min':
            return val >= rule[1];

          case 'range':
            return val >= rule[1] && val <= rule[2];

          case 'not':
            return val != rule[1];

          case 'is':
            return rule.slice(1, rule.length).some(function(el) {
              return val == send_obj[el];
            });

          case 'same':
            return val == send_obj[rule[1]];

          case 'diff':
            return val != send_obj[rule[1]];
        }
      }

      return true;
    };

    var inValidEl = {};

    if (settings.validator) {
      for (var k in settings.validator) {
        for (var i = 0; i < settings.validator[k].length; i++) {
          if (!checkValid(send_obj[k].val, settings.validator[k][i])) {
            if (inValidEl[k] === undefined) inValidEl[k] = [];
            inValidEl[k].push(settings.validator[k][i].split(':')[0]);
          }
        }
      }
    }

    if (!$.isEmptyObject(inValidEl) && settings.invalid) {
      settings.invalid({ errors: inValidEl, obj: send_obj });
      return false;
    } else if (settings.valid) {
      settings.valid();
    }

    // callback function =========================================
    if (settings.callback) {
      inValidEl = $.isEmptyObject(inValidEl) || inValidEl;
      settings.callback(send_obj, inValidEl);
    }

    return send_obj;
  };

  /**
   * Валидация
   *
   * @param options
   */
  $.fn.validateTooltip = function(options) {
    var $this = $(this);
    var top = parseInt($this.offset().top - 34, 10);
    var left = parseInt($this.offset().left + $this.width() / 2, 10);

    $this.tooltip = $(
      '<div class="validate-error" style="top:' +
        top +
        'px; left:' +
        left +
        'px">' +
        '<div class="animated"><div><i></i>' +
        options.text +
        '</div></div>' +
        '</div>'
    );

    $('body').append($this.tooltip);

    $this.tooltip.find('.animated').addClass('shake');

    $this.click(function() {
      $this.tooltip.remove();
    });
  };

  /**
   * Отправка формы
   */
  $(document).on('submit', 'form.' + formsClass, function(e) {
    e.preventDefault();
    var form = $(this);
    $('.validate-error').remove();
    if (!form.hasClass('disabled')) {
      var data = form.formData({
        validator: {},
        invalid: function(data) {
          for (var name in data.errors) {
            data.obj[name].obj.validateTooltip({
              text: data.obj[name].obj.rules[data.errors[name][0]]
            });
          }
        }
      });

      var files = {};
      var isset_files = false;
      console.log(form);
      console.log(form.formData());
      console.log(data);
      if (data === false) {
        return false;
      } else {
        for (var el in data) {
          if (
            typeof data[el].obj !== 'undefined' &&
            data[el].obj[0].type == 'file'
          ) {
            isset_files = true;
            files[el] = data[el];
            delete data[el];
          } else delete data[el].obj;
        }
      }

      var info = getInfo();

      $.extend(data, info);
      var fd = new FormData();

      if (isset_files) {
        for (var el in files) {
          var field = files[el].obj.get(0);
          console.log(field.files.length);
          for (var i = 0; i < field.files.length; i++) {
            fd.append(el, field.files[i]);
          }
        }
      }

      fd.append('data', JSON.stringify(data));

      var url = form.attr('action') || '/api.php';
      console.log(url);
      $.ajax({
        url: url,
        type: 'POST',
        processData: false,
        contentType: false,
        data: fd,
        dataType: 'json',
        beforeSend: function() {
          form.addClass('disabled');
          form.find('button[type="submit"]').html('Отправляем...');
        },
        success: function(response) {
          console.log(response);
          if (typeof dataLayer !== 'undefined') {
            var page = $(form)
              .find('[name="tagmanager"]')
              .val();
            if (typeof page !== 'undefined') {
              dataLayer.push({
                event: 'VirtualPageview',
                virtualPageURL: page,
                virtualPageTitle: page.replace('/', '')
              });
            }
          }

          if (response.status == 'OK' || response.status == 'Form Error') {
            form.trigger('reset');
            form.find('button[type="submit"]').html('Отправлено');
            form.trigger('sent', response);
            if (
              typeof form.data('success-title') !== 'undefined' ||
              typeof form.data('success-message') !== 'undefined'
            ) {
              swal(
                form.data('success-title'),
                form.data('success-message'),
                'success'
              );
            }
            if (typeof form.data('success-redirect') !== 'undefined') {
              window.location = form.data('success-redirect');
            }
          } else {
            form.trigger('error', response);
            if (
              typeof form.data('error-title') !== 'undefined' ||
              typeof form.data('error-message') !== 'undefined'
            ) {
              swal(
                form.data('error-title'),
                form.data('error-message'),
                'error'
              );
            }
          }
        },
        error: function(response) {
          form.removeClass('disabled');
          form.find('button[type="submit"]').html('Не вышло :(');
          form.trigger('error', response);
          if (
            typeof form.data('error-title') !== 'undefined' ||
            typeof form.data('error-message') !== 'undefined'
          ) {
            swal(form.data('error-title'), form.data('error-message'), 'error');
          }
        }
      });
    }

    return true;
  });

  function parseGetParams() {
    var $_GET = {};
    var __GET = window.location.search.substring(1).split('&');
    for (var i = 0; i < __GET.length; i++) {
      var getVar = __GET[i].split('=');
      $_GET[getVar[0]] = typeof getVar[1] == 'undefined' ? '' : getVar[1];
    }
    return $_GET;
  }

  function getInfo() {
    var keys = parseGetParams();
    var host_s = window.location.host + window.location.pathname.slice(0, -1);
    return {
      history: { title: '', val: history.length },
      js_user_agent: { title: '', val: getUserAgent(navigator.userAgent) },
      get: { title: 'Страница', val: window.location.href },
      referer: {
        title: 'Заявка пришла со страницы',
        val:
          typeof document.referrer == 'undefined' ? 'NULL' : document.referrer
      },
      host: { title: '', val: host_s }
      // utm_source: {
      //   title: 'Поисковая система',
      //   val: typeof keys['utm_source'] == 'undefined' ? '' : keys['utm_source']
      // },
      // utm_campaign: {
      //   title: 'Кампания',
      //   val:
      //     typeof keys['utm_campaign'] == 'undefined' ? '' : keys['utm_campaign']
      // },
      // utm_term: {
      //   title: 'Ключ',
      //   val:
      //     typeof keys['utm_term'] == 'undefined'
      //       ? ''
      //       : decodeURIComponent(keys['utm_term'])
      // }
    };
  }

  function getUserAgent(u) {
    var ua = u.toLowerCase(),
      is = function(t) {
        return ua.indexOf(t) > -1;
      },
      g = 'gecko',
      w = 'webkit',
      s = 'safari',
      o = 'opera',
      m = 'mobile',
      h = document.documentElement,
      b = [
        !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
          ? 'ie ie' + RegExp.$1
          : is('firefox/2')
          ? g + ' ff2'
          : is('firefox/3.5')
          ? g + ' ff3 ff3_5'
          : is('firefox/3.6')
          ? g + ' ff3 ff3_6'
          : is('firefox/3')
          ? g + ' ff3'
          : is('gecko/')
          ? g
          : is('opera')
          ? o +
            (/version\/(\d+)/.test(ua)
              ? ' ' + o + RegExp.$1
              : /opera(\s|\/)(\d+)/.test(ua)
              ? ' ' + o + RegExp.$2
              : '')
          : is('konqueror')
          ? 'konqueror'
          : is('blackberry')
          ? m + ' blackberry'
          : is('android')
          ? m + ' android'
          : is('chrome')
          ? w + ' chrome'
          : is('iron')
          ? w + ' iron'
          : is('applewebkit/')
          ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '')
          : is('mozilla/')
          ? g
          : '',
        is('j2me')
          ? m + ' j2me'
          : is('iphone')
          ? m + ' iphone'
          : is('ipod')
          ? m + ' ipod'
          : is('ipad')
          ? m + ' ipad'
          : is('mac')
          ? 'mac'
          : is('darwin')
          ? 'mac'
          : is('webtv')
          ? 'webtv'
          : is('win')
          ? 'win' + (is('windows nt 6.0') ? ' vista' : '')
          : is('freebsd')
          ? 'freebsd'
          : is('x11') || is('linux')
          ? 'linux'
          : '',
        'js'
      ];

    var c = b.join(' ');
    h.className += ' ' + c;
    return c;
  }

  /**
   * Удаление сообщений валидатора
   */
  $(document).on('click', function() {
    $('body > .validate-error').remove();
  });

  /**
   * Настройка селектов
   */
  $('form.' + formsClass + ' .chosen-select').each(function() {
    var $this = $(this);
    var settings = {};
    if (typeof $this.data('settings') === 'object') {
      settings = $this.data('settings');
    }
    $this.chosen(settings);

    if (typeof $this.data('limit-error') !== 'undefined') {
      $this.bind('chosen:maxselected', function() {
        swal($this.data('limit-error'), '', 'error');
        $('[type="submit"]').focus();
      });
    }
  });

  /**
   * Маска телефона
   */
  $('form.' + formsClass + ' input[name="phone"]').each(function() {
    var $this = $(this);
    if (typeof $this.data('validate-uaphone') !== 'undefined')
      $this.mask('+38 (999) 999-99-99');

    if (typeof $this.data('validate-ruphone') !== 'undefined')
      $this.mask('+7 (999) 999-99-99');
  });
};
