// String Compression: Implement a method to perform basic string compression
// using the counts of repeated characters. For example, the string aabcccccaaa
// would become a2b1c5a3. If the "compressed" string would not become smaller,
// return the original string. Assume the string has only uppercase and lowercase
// letters.

function compressString(inputString) {
  var compressedString = '';
  var countConsecutive = 0;

  for (var i = 0; i < inputString.length; i++) {
    countConsecutive++;

    if (i + 1 >= inputString.length || inputString[i] != inputString[i+1]) {
      compressedString += inputString[i] + countConsecutive;
      countConsecutive = 0;
    }
  }

  return compressedString.length < inputString.length ? compressedString : inputString;
}

// Tests

console.log('input: aaaaaa', 'Output: ', compressString('aaaaaa'), 'Expected Output: a6');
console.log('input: aabcccdeeeeeee', 'Output: ', compressString('aabcccdeeeeeee'), 'Expected Output: a2b1c3d1e7');

// It might be useful to figure out the length of the compressed string first
// before creating it. That way the memory isn't used to create the compressed string
// if the original string is shorter. The following function counts how many
// letter sequences there are, and thus the length of the compressed string.
// The disadvantage is that it may require looping through the input string twice.
// Once to figure out the compressed string length and once to actually create it.

function countCompression(inputString) {
  var compressedLength = 0;
  //var countConsecutive = 0;

  for (var i = 0; i < inputString.length; i++) {
    //countConsecutive++;

    if (i + 1 >= inputString.length || inputString[i] != inputString[i + 1]) {
      compressedLength += 2;
      //countConsecutive = 0;
    }
  }

  return compressedLength;
}
