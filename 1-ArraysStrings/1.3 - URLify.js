// Write a method to replace all spaces in a string with '%20'.
// The problem, as defined, assumes you are given the "true length" of the string,
// that is, the length without any extra trailing spaces.


// first attempt
function URLify(inputString, trueLength) {
  var inputArray = inputString.split('');

  for (var i = 0; i < trueLength; i++) {
    if (inputArray[i] === ' ') {
      inputArray[i] = '%20';
    }
  }

  return inputArray.join('');

}

// tests

console.log(URLify('https://www.testsite.com/some text', 34));
console.log(URLify('https://www.testsite.com/some other text', 40));
console.log(URLify('https://www.testsite.com/trailing spaces   ', 40));


// What if you're not given the "true length" but still need to deal with trailing space?

function URLify2(inputString) {
  var inputArray = inputString.split('');

  //check for trailing spaces
  var pointer = inputArray.length-1;
  var trailingSpaces = (inputArray[pointer] === ' ');

  // start at the end and remove spaces until there are no more spaces
  while (trailingSpaces) {
    inputArray.pop();
    pointer--;
    trailingSpaces = (inputArray[pointer] === ' ');
  }

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === ' ') {
      inputArray[i] = '%20';
    }
  }

  return inputArray.join('');
}

// Tests
console.log(URLify2('https://www.testsite.com/some text'));
console.log(URLify2('https://www.testsite.com/some other text'));
console.log(URLify2('https://www.testsite.com/trailing spaces   '));
