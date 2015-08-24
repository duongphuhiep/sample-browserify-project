describe("Chessboard", function() {
  var Chessboard = require('../../app/Chessboard');

  it("should test coverage", function() {
    expect(Chessboard.pieces.length).toEqual(2);
    expect(Chessboard.coverage().length).toEqual(9);
  });
});