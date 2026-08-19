// Generate all substrings of a string
function allSubstrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log(allSubstrings("neha"));
// Output: ["n","ne","neh","neha","e","eh","eha","h","ha","a"]
