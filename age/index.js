'use strict';

module.exports = function(params, res) {
  var today = new Date();
  var tMonth = today.getMonth()+1;
  var tDay = today.getDate();
  var tYear = today.getFullYear();

  var bMonth = parseInt(params.shift());
  var bDay = parseInt(params.shift());
  var bYear = parseInt(params.shift());

  if(bDay > 31 || bMonth > 12) {
    res.end("!");
  }
  var age = tYear - bYear;
  if(bMonth > tMonth) {
    age--;
  } else {
    if(bDay > tDay) {
      age--;
    }
  }

  res.end(age.toString());

};
