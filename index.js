'use strict';

function getDogImg () {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responsejson => 
      displayResults(responsejson))
    .catch(error => alert('error occured'));
}

function displayResults(responsejson) {
  console.log(responsejson);
  $('.resultsImg').replaceWith(`<img src="${responsejson.message}" class='resultsImg'>`);
  $('.results').removeClass('hidden');
}

function watchForm () {
  $('form').submit(event => {
    event.preventDefault();
    getDogImg();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})