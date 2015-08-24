describe("Piece", function() {
	var Piece = require('../../app/Piece');
	var Position = require('../../app/Position');

	var postionMatcher = {
		matchPosition: function(util, customEqualityTesters) {
			return {
				compare: function(actual, expected) {
					if (expected === undefined) {
						expected = '';
					}
					var result = {};
					result.pass = actual.x === expected.x && actual.y === expected.y;
					if (!result.pass) {
						result.message = "Expected (" + expected.x + "," + expected.y + "), but actual (" + actual.x + "," + actual.y + ")";
					}
					return result;
				}
			}
		}
	}


	beforeEach(function() {
		jasmine.addMatchers(postionMatcher);
	});


	it("should be able to create a Pawn", function() {
		var pawn = new Piece.Pawn(new Position(8, 8), 'B');
		var nextMove = pawn.nextPossibleMove();
		expect(nextMove.length).toEqual(1);
		expect(nextMove[0]).matchPosition(new Position(8, 7));
	});


	it("should be able to create a King", function() {
		var king = new Piece.King(new Position(8, 8), 'B');
		var nextMove = king.nextPossibleMove();
		expect(nextMove.length).toEqual(8);
	});
});