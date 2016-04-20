'use strict';
var md5 = require('md5');

module.exports = function(params, res) {

  var email = params.shift();
  var md5Email = md5(email);
  var gravatarUrl = `https://s.gravatar.com/avatar/${md5Email}?s=80`;
  res.end(gravatarUrl);
};
