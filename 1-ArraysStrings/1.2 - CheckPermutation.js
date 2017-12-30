// Given two strings, check if one is a permutation of the other

function checkPermutation(string1, string2) {

  // if different lengths, return false
  if (string1.length !== string2.length) {
    return false
  } else {
    // sort the strings.  Doesn't matter how it's sorted as long as they
    // are sorted the same way.
    var string1sorted = string1.split('').sort().join('');
    var string2sorted = string2.split('').sort().join('');

    return string1sorted === string2sorted;
  }
}

// tests

console.log(checkPermutation('ABC', 'BCA'), true);
console.log(checkPermutation('ABC', 'AABC'), false);
console.log(checkPermutation('ABB', 'AAB'), false);
