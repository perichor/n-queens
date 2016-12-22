/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board(window.makeEmptyMatrix(n));
  var rookCount = 0;
  var solutionFound = false;

  var recursor = function(i) {
    _.each(solution.rows()[i], function(element, j) {
      if (!solutionFound) {
        solution.attributes[i][j] = 1;
        rookCount++;
        
        if (solution.hasAnyRooksConflicts() === true) {
          solution.attributes[i][j] = 0;
          rookCount--;
        } else {
          if (rookCount !== n) {
            recursor(i + 1);  
          } else {
            solutionFound = true;
          }
        }


      }
    });
  };
  recursor(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(x) {
    x = x * n;
    n--;
    if (n === 0) {
      return x;
    } else {
      return factorial(x);
    }

  };

  var solutionCount = factorial(1);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board(window.makeEmptyMatrix(n));
  var queenCount = 0;
  var solutionFound = false;

  var recursor = function(i) {
    _.each(solution.rows()[i], function(element, j) {
      if (!solutionFound) {
        solution.attributes[i][j] = 1;
        queenCount++;
        
        if (solution.hasAnyRooksConflicts() === true) {
          solution.attributes[i][j] = 0;
          queenCount--;
        } else {
          if (queenCount !== n) {
            recursor(i + 1);  
          } else {
            solutionFound = true;
          }
        }


      }
    });
  };
  recursor(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
