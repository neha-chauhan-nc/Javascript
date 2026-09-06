function buildSuffixArray(s) {
  let suffixes = [];
  for (let i = 0; i < s.length; i++) {
    suffixes.push([s.substring(i), i]);
  }
  suffixes.sort((a, b) => a[0].localeCompare(b[0]));
  return suffixes.map(x => x[1]);
}

// Example usage:
console.log(buildSuffixArray("banana"));
// Output: [5,3,1,0,4,2] (suffixes sorted lexicographically)
