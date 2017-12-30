// One away: Given two strings, write a function to check if they are one edit away.
// An edit can be a replacement, insertion, or deletion of a single character.


function oneEditAway(string1, string2) {
  // if strings are same length then check for replacement
  if (string1.length === string2.length) {
    return oneEditReplace(string1, string2);
  }
  // if strings lengths are different by one, check for insert
   else if (string1.length + 1 === string2.length) {
     return oneEditInsert(string1, string2);
   } else if (string2.length + 1 === string1.length) {
     return oneEditInsert(string2, string1);
   }
   return false; // strings fail by definition because of lengths
}

// This function handles the case where one string is shorter than the other, i.e.
// insertion or deletion. Here, string1 is the shorter string.

function oneEditInsert(string1, string2) {
  var index1 = 0,
      index2 = 0;

  while (index2 < string2.length && index1 < string1.length) {
    if (string1[index1] !== string2[index2]) { // if the characters don't match
      if (index1 != index2) { // we've already skipped exactly one character
        return false;
      }
      index2++; // skip a character in the longer string
    } else { // if they do match, go to next character
      index1++;
      index2++;
    }
  }
  return true;
}

// This function handles the replacement case.  It compares the strings character
// by character and returns false if there is more then one difference between them.

function oneEditReplace(string1, string2) {
  var foundDifference = false;

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] != string2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}


// Tests
console.log(oneEditAway('pale', 'ple'), true);
console.log(oneEditAway('pales', 'pale'), true);
console.log(oneEditAway('pale', 'bale'), true);
console.log(oneEditAway('pale', 'bae'), false);
