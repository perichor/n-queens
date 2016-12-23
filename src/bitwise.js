countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solutionCase = Math.pow(2, n) - 1;

  var recursor = function(maj, col, min) {

    if (col === solutionCase) {
      solutionCount++;
      return;
    }

    var possible = ~(maj | min | col);

    while ( possible & solutionCase ) {
      var bit = possible & -possible;
      possible -= bit;
      recursor((maj | bit) >> 1, col | bit, (min | bit) << 1);
    }
  };

  recursor(0, 0, 0);

  return solutionCount;
};