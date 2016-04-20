'use strict';

$(document).ready(init);

function init() {
  $('.gravatar-search').submit(gravatar);
  $('.math-search').submit(math);
  $('.analyze-search').submit(analyze);
  $('.age-search').submit(age);
}

function age(event) {
  event.preventDefault();
  var url = $('.age-search-bar').val();
  callApi(url);
}

function analyze(event) {
  event.preventDefault();
  var url = $('.analyze-search-bar').val();
  callApi(url);
}

function math(event) {
  event.preventDefault();
  var url = $('.math-search-bar').val();
  callApi(url);
}

function gravatar(event) {
  event.preventDefault();
  var url = $('.gravatar-search-bar').val();
  callApi(url);
}

function callApi(url){
  $.get(url)
  .done(function(data) {
    var resource = url.split("/")[1];
    if(resource === "gravatar") {
      displayGravatar(data);
    } else if(resource === "math"){
      displayMath(data);
    } else if(resource === "analyze"){
      displayAnalyze(data);
    } else if(resource === "age"){
      displayAge(data);
    }
  })
  .fail(function(error) {
    console.log('error:', error);
  });
};

function displayAge(data) {
  $(".this-age").remove();
  var $age = $(`<h1 class="this-age">${data}</h1>`);
  $(".age-result").append($age);
}

function displayAnalyze(data) {
  $(".this-sentence").remove();
  var results = data.split(" ");
  var $card = `<div class="this-sentence">
    <h1>Words: <span>${results[0]}</span></h1>
    <h1>Characters: <span>${results[1]}</span></h1>
    <h1>Average words: <span>${results[2]}</span></h1>
  </div>`;
  $(".analyze-result").append($card);
}

function displayMath(data) {
  $(".this-math").remove();
  var $math = $(`<h1 class="this-math">${data}</h1>`);
  $(".math-result").append($math);
}

function displayGravatar(data) {
  $(".this-pic").remove();
  var $image = $(`<img src="${data}" class="this-pic">`);
  $(".image").append($image);
}
