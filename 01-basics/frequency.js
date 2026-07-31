function charFrequency(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(charFrequency("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }
