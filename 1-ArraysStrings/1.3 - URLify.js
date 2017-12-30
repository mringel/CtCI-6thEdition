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
