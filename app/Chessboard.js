/**
* we can unit test the Chessboard which evens if it require
*	a node modules 
*	other applicatif module
*	jquery (external library coming from CDN)
*/
var _ = require('underscore');
var Piece = require('./Piece');
var Position = require('./Position');

var Chessboard = (function () {
    function Chessboard(pieces) {
        this.pieces = pieces;
    }
    //get the all the next possible moves of all the pieces
    Chessboard.prototype.coverage = function () {
    	var nextMoves = _.map(this.pieces, function(p){ 
    					return p.nextPossibleMove(); 
    				});

    	var result = [];
    	for (var i=0; i<nextMoves.length; i++) {
    		result = _.union(result, nextMoves[i]);
    	}

    	return result;
    };
    return Chessboard;
})();


var pieces = [
    	 new Piece.King(new Position(8,8), 'B'),
    	 new Piece.Pawn(new Position(4,4), 'W')
   	];


var chessboardInstance = new Chessboard(pieces);
module.exports = chessboardInstance;


/**
 * This part cannot be tested by unit test.
 * Still you must to load the jquery on SpecRunner.html, otherwise the test will fail
 */
var $ = require('jquery');
$(function() {
	$('#checkboard').text(JSON.stringify(chessboardInstance));
})


