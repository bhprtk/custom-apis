'use strict';

const PORT = 5000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {

  var params = req.url.split('/');

  params.shift(); // remove the first empty space

  var resource = params.shift().toLowerCase();

  switch(resource) {
    case "":
      var data = fs.readFileSync('./public/index.html');
      res.end(data.toString());
      break;

    case "math":
      require('./math')(params, res);
      break;

    case "gravatar":
      require('./gravatar')(params, res);
      break;

    case "analyze":
      require('./analyze')(params, res);
      break;

    case "age":
      require('./age')(params, res);
      break;

    default:
      fs.readFile(`./public/${resource}`, (err, data) => {
      if(err) { // looking for nonexistent file
        res.statusCode = 404;
        res.write('Not Found.');
        res.end('\n');
      } else { // file found!!!
        res.end(data.toString());
      }
  });
  }
}); // end of createServer

server.listen(PORT, function(err) {
  if(err) return console.log('error!:', err);
  console.log(`Node server listening on port ${PORT}`);
})
