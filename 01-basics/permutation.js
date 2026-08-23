// Generate all permutations of a string
function permutations(str) {
  if (str.length <= 1) return [str];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of permutations(remaining)) {
      result.push(char + perm);
    }
  }
  return result;
}

console.log(permutations("abc"));
// Output: ["abc","acb","bac","bca","cab","cba"]
