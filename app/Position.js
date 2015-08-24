//class position
var Position = (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    
    Position.prototype.offset = function (ofsx, ofsy) {
        return p = new Position(this.x + ofsx, this.y + ofsy);
    };
    return Position;
})();

module.exports = Position;