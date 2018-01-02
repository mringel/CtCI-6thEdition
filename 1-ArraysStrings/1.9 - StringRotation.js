// Assume you have a method isSubstring which checks if one word is a substring
// of another.  Given two strings, s1 and s2, write code to check if s2 is a
// rotation of s1 using only one call to isSubstring ("waterbottle" is a rotation
// of "erbottlewat").

// Notes:
// No matter where the rotation is, s2 will be a substring of s1s1 if s2 is a
// rotation of s1.  "erbottlewat" is a substring of "waterbottlewaterbottle".

function isRotation(s1, s2) {
  var len = s1.length;
  if (len === s2.length && len > 0) {
    return isSubstring(s1+s1, s2)
  }
  return false;
}
