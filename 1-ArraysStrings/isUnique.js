// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUnique(inputString) {
  // O(n^2) approach.  No additional data structures used.
  // Compares each character to every other character. If match, return false.
  // This solution is case sensitive (A != a).

  for (var i = 0; i < inputString.length; i++) {
    for (var j = i+1; j < inputString.length-1; j++) {
      if (inputString[i]===inputString[j]) {
        return false;
      }
    }
  }

  return true;
}
