// God save the Dev
'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/templates/layouts/index.html');
}

// Depends
const $ = require('jquery');
require('bootstrap-sass');

// Modules
const Forms = require('_modules/forms');
const Slider = require('_modules/slider');
const Jscrollpane = require('_modules/jscrollpane');
const Chosen = require('_modules/chosen');
// require('perfect-scrollbar');
import PerfectScrollbar from 'perfect-scrollbar';

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function() {
  new Forms();
  new Jscrollpane();
  new Slider();
  new Chosen();
  new PerfectScrollbar('.listOfCompanies');

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
            renderCompanies();
            return;
          });
        })
        .catch(error => {
          alert(
            'There has been a problem with your fetch operation: ' +
              error.message
          );
        });
    };
    getCompanies();

    const createCompList = companies => {
      for (let i = 0; i < companies.length; i++) {
        $('.listOfCompanies').append(
          `<li>
              <a
                href="#${companies[i].name}"
                class="companyItem"
                data-toggle="tab"
                data-index="${i}">
                ${companies[i].name}
              </a>
            </li>`
        );
      }
    };
    const renderCompanies = () => {
      $('.totalCompanies span').html(compList.length);
      createCompList(compList);
      renderCompaniesPartners(compList);
    };

    const renderCompanyPartners = partners => {
      let partnersArr = [];
      for (let i = 0; i < partners.length; i++) {
        partnersArr.push(`<div class=" partnerItem">
        <p>${partners[i].name}</p>
        <p>Процентная доля компании: ${partners[i].value} %</p>
        </div>`);
      }
      console.log(partnersArr);
      return partnersArr;
    };

    const renderCompaniesPartners = compList => {
      for (let i = 0; i < compList.length; i++) {
        $('.partnersContent').append(
          $('<div>')
            .addClass('tab-pane', 'fade')
            .attr('id', `${compList[i].name}`)
            .append(
              $('<div>')
                .addClass('partnersWrp')
                .append(`${renderCompanyPartners(compList[i].partners)}`)
            )
        );
      }
    };
  });
});
