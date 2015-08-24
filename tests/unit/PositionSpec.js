describe("Position", function() {
  var Position = require('../../app/Position');

  it("should be able to create a position", function() {
    var p = new Position(1, 2);
    expect(p.x).toEqual(1);
    expect(p.y).toEqual(2);
  });

  it("should create a new position with offset", function() {
    var p = new Position(1, 2);
    var p2 = p.offset(3,5)
    expect(p2.x).toEqual(4);
    expect(p2.y).toEqual(7);
  });
});
