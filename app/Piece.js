/**
 * class Pawn
 */
module.exports.Pawn = (function () {
    function Pawn(initialPosition, color) {
        this.position = initialPosition;
        this.color = color;
    }
    Pawn.prototype.nextPossibleMove = function () {
    	if (this.color === 'B') {
        	return [
        		this.position.offset(0,-1),
        		];
        }
        else {
        	return [
        		this.position.offset(0,1)
        		];
        }
    };
    return Pawn;
})();

/**
 * class King
 */
module.exports.King = (function () {
    function King(initialPosition, color) {
        this.position = initialPosition;
        this.color = color;
    }
    King.prototype.nextPossibleMove = function () {
        return [
        	this.position.offset(-1,-1),
        	this.position.offset(-1,0),
        	this.position.offset(-1,1),
        	this.position.offset(0,-1),
        	this.position.offset(0,1),
        	this.position.offset(1,-1),
        	this.position.offset(1,0),
        	this.position.offset(1,1)
        ];
    };
    return King;
})();