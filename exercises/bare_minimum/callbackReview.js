/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var http = require('http');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  //use readfile to get the contents from filePath
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) { callback(err); }
  //on successful reading data, find index of first \n
    var index = data.indexOf('\n');
  //slice to indexOf \n
    callback(err, data.slice(0, index));
  //pass slice to callback
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(err, response, body) {
    if (err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
