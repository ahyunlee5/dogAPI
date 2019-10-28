'use strict';

function getDogImg (inputValue) {
  fetch(`https://dog.ceo/api/breeds/image/random/${inputValue}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('error occured'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let multiImg = responseJson.message;
  let display = getImages(multiImg);
  $('.resultsImg').html(display);
}

function getImages (multiImg) {
  let value = '';
  for (let i = 0; i < multiImg.length; i++) {
    value += `<img src="${multiImg[i]}" class='resultsImg'>`; 
  }
  return value;
}

function watchForm () {
  $('form').submit(event => {
    event.preventDefault();
    let inputValue = $('.amount').val();
    getDogImg(inputValue);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})