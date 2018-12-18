// God save the Dev
'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/templates/layouts/index.html');
}

// Depends
const $ = require('jquery');
require('bootstrap-sass');

// Modules
require('_modules/forms');
require('_modules/slider');
require('_modules/popup');
require('_modules/chosen');
require('_modules/jscrollpane');

// Stylesheet entrypoint
require('_stylesheets/app.scss');

$(function() {
  const companiesListUrl =
    'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList';
  const newsListUrl =
    'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList';
  let compList;
  let preloader = $('#loader');

  const getCompanies = () => {
    fetch(companiesListUrl)
      .then(response => {
        if (response.status !== 200) {
          alert(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        response.json().then(data => {
          $(preloader).css('display', 'none');
          compList = data.list;
          displayCompanies();
          return;
        });
      })
      .catch(error => {
        alert(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  };
  getCompanies();

  const createCompList = companies => {
    for (let i = 0; i < companies.length; i++) {
      $('.listOfCompanies').append(
        `<li><a href="#">${companies[i].name}</a></li>`
      );
    }
  };

  const displayCompanies = () => {
    $('.totalCompanies span').html(compList.length);
    createCompList(compList);
  };
});
