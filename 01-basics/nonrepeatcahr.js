// Find first non-repeating character
function firstUniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstUniqueChar("neha"));     // Output: "n"
console.log(firstUniqueChar("aabbccdde")); // Output: null
