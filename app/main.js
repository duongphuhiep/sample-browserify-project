var _ = require('underscore');
var names = require('./names.js');
var $ = require('jquery');

$(function() {
	$('#foo').text('Jquery work');	
});


findSuperman(names());

function findSuperman(values) {
  _.find(values, function(name) {
    if (name === 'Clark Kent') {
      console.log('It\'s Superman!');
    } else {
      console.log('... No superman!');
    }
  });
}

var chessboard = require('./Chessboard');