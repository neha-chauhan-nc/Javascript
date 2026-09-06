function rabinKarp(text, pattern) {
  let m = pattern.length;
  let n = text.length;
  let prime = 101; // base prime for hashing
  let power = 1;
  let patternHash = 0, textHash = 0;

  for (let i = 0; i < m - 1; i++) power = (power * 256) % prime;

  for (let i = 0; i < m; i++) {
    patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (256 * textHash + text.charCodeAt(i)) % prime;
  }

  let result = [];
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      if (text.substr(i, m) === pattern) result.push(i);
    }
    if (i < n - m) {
      textHash = (256 * (textHash - text.charCodeAt(i) * power) + text.charCodeAt(i + m)) % prime;
      if (textHash < 0) textHash += prime;
    }
  }
  return result;
}

// Example usage:
console.log(rabinKarp("ababcabcabababd", "ababd"));
// Output: [10]
