function areAnagrams(str1, str2) {
  let normalize = s => s.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); 
// Output: true
