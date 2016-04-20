'use strict';

module.exports = function(params, res) {

  var sentence = params.shift().replace(/%20/g, " ");

  var words = sentence.split(" ").length.toString();

  var chars = sentence.split("").length.toString();

  var avg = (parseFloat(chars) / parseFloat(words)).toString();

  var result = `${words} ${chars} ${avg}`;
  
  res.end(result);
};
