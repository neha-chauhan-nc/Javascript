// Find first non-repeating character in string
function firstNonRepeating(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeating("neha"));   // Output: "n"
console.log(firstNonRepeating("aabbcc")); // Output: null
