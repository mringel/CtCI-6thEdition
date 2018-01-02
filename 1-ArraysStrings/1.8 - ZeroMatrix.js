// Write an algorithm such that if an element in an MxN matrix is zero, its
// entire roaw and column are set to zero.

// Notes:
// Have to keep track of which rows and columns have a zero, and then set those
// to zero, rather than doing it as you pass.  If you set them as you go then the
// algrorithm will find those zeros that it set and continue setting more zeros
// based on those.

function setZeros(inputMatrix) {
  var rows = [],
      columns = [];

  for (var i = 0; i < inputMatrix.length; i++) {
    for (var j = 0; j < inputMatrix.length; j++) {
      if (inputMatrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  // Nullify rows
  for (var i = 0; i < rows.length; i++) {
    if (rows[i]) { nullifyRow(inputMatrix, i) }
  }

  // nullify columns
  for (var j = 0; j < columns.length; j++) {
    if (columns[j]) { nullifyColumn(inputMatrix, j)
    }
  }
} // close setZeros

function nullifyRow(inputMatrix, row) {
  for (var j = 0; j < inputMatrix[0].length; j++) {
   inputMatrix[row][j] = 0;
  }
}

function nullifyColumn(inputMatrix, col) {
  for (var i = 0; i < inputMatrix.length; i++) {
    inputMatrix[i][col] = 0;
  }
}

// Tests
var testMatrix1 = [[0,1,1], [1,1,1], [1,1,1]];
var testMatrix2 = [[1,1,1], [1,0,1], [1,1,1]];
var testMatrix3 = [[0,0,1], [1,1,1], [1,1,1]];

setZeros(testMatrix1);
console.dir(testMatrix1);


setZeros(testMatrix2);
console.dir(testMatrix2);

setZeros(testMatrix3);
console.dir(testMatrix3);
