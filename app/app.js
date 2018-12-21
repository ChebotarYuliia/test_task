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
const moment = require('moment');
import PerfectScrollbar from 'perfect-scrollbar';

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
  new Forms();
  new Jscrollpane();
  new Slider();
  new Chosen();
  new PerfectScrollbar('.listOfCompanies');

  $(function () {
    // RENDERING CONPANIES SECTIONS
    const companiesListUrl =
      'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList';
    let compList;
    let preloader = $('#loader');

    const getCompanies = () => {
      fetch(companiesListUrl)
        .then(response => {
          if (response.status !== 200) {
            alert(
              'Looks like with getting companies was a problem. Status Code: ' +
              response.status
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

    // RENDERING NEWS SECTION
    const newsListUrl =
      'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList';
    let newsList;

    const getNews = () => {
      fetch(newsListUrl)
        .then(response => {
          if (response.status !== 200) {
            alert(
              'Looks like with getting news was a problem. Status Code: ' +
              response.status
            );
            return;
          }

          response.json().then(data => {
            newsList = data.list;
            renderNews(newsList);
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
    getNews();

    const getPostDate = unixDate => {
      let date = moment.unix(unixDate).format('DD.MM.YYYY');
      return date;
    };

    const filterPostDescription = description => {
      let minDescription = description.slice(0, 110);
      return (minDescription += '...');
    };

    const renderNews = news => {
      for (let i = 0; i < news.length; i++) {
        $('.newsSlider').append(
          `<div>
              <div
                class="newsSliderItem">
                <div>
                  <img 
                    src="${news[i].img} 
                    alt="${news[i].description}"
                  />
                  <p class="newsSliderItemAuthor">
                    Автор: ${news[i].author}
                  </p>
                </div>
                <div>
                  <p class="newsSliderItemDate">
                    ${getPostDate(news[i].date)}
                  </p>
                  <a href="${news[i].link}"
                     target="_blank"
                     class="newsSliderItemTitle">
                    ${news[i].link}
                  </a>
                  <p class="newsSliderItemDescr">
                    ${filterPostDescription(news[i].description)}
                  </p>
                </div>
              </div>
            </div>`
        );
      }
      $('.newsSlider').slick();
    };
  });
});
