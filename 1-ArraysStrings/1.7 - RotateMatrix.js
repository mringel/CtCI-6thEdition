// Given a NxN matrix, write a method to rotate the matrix by 90 degrees.
// Can this be done in place?

function rotate(inputMatrix) {
  // check for invalid cases: empty matrix, non-square matrix
  if (inputMatrix.length === 0 || inputMatrix.length != inputMatrix[0].length) {
    return false;
  }

  var n = inputMatrix.length;

  for (var layer = 0; layer < n/2; layer++) {
    let first = layer;
    let last = n-1-layer;
    for (var i = first; i < last; i++) {
      var offset = i - first;
      var top = inputMatrix[first][i] // save top

      // left -> top
      inputMatrix[first][i] = inputMatrix[last-offset][first];

      // bottom -> left
      inputMatrix[last-offset][first] = inputMatrix[last][last-offset];

      // right -> bottom
      inputMatrix[last][last-offset] = inputMatrix[i][last]

      // top -> right
      inputMatrix[i][last] = top;
    }
  }
  return true;
}
 // Tests
var test1 = [[1,2,3],[4,5,6], [7,8,9]];
console.log('Input: ', test1)
rotate(test1);
console.log('Output: ', test1)
