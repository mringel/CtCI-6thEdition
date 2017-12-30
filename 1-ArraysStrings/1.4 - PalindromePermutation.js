// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwords.
// A permutation is a rearrangement of letters.  The palindrome need not be limited
// to dictionary words.
//
// EXAMPLE
// Input:   Tact Coa
// Output:  True (permutations: "taco cat", "atco cta", etc.)

// in order to be a palindrome a string can have at most one character
// with an odd number of instances.  This solution counts all the characters
// and returns true if they are all found in even amounts with at most one odd.
// This solution is case sensitive.  It could be made case insensitive by converting
// all characters in the string to lowercase, for example.

function isPermutionOfPalindrome(inputString) {
  // initialize object to hold character counts
  var characterCounts = {};

  // variable to hold the number of odd characters found in the string
  var odds = 0;

  var inputArray = inputString.split('');

  // loop through the string and count the number of times each character is found.
  for (var i = 0; i < inputArray.length; i++) {
    // check for spaces and don't count them
    if (inputArray[i] !== ' ') {
      if (!characterCounts[inputArray[i]]) {
        characterCounts[inputArray[i]] = 1;
      } else {
        characterCounts[inputArray[i]] = characterCounts[inputArray[i]]+1;
      }
    }
  }

  // iterate through the character counts and add up the number of odds
  for (const char in characterCounts) {
    if (characterCounts[char] % 2 !== 0) { odds++}
  }

  if (odds <2 ) {
    return true;
  } else {
    return false;
  }

}


// Tests

isPermutionOfPalindrome('tact coa');
isPermutionOfPalindrome('abbc');
