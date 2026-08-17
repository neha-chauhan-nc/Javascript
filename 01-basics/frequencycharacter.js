// Count frequency of characters in a string
function charFrequency(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(charFrequency("neha"));
// Output: { n: 1, e: 1, h: 1, a: 1 }
