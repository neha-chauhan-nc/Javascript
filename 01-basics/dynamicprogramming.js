function longestPalindromicSubsequence(s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) dp[i][i] = 1;

  for (let cl = 2; cl <= n; cl++) {
    for (let i = 0; i < n - cl + 1; i++) {
      let j = i + cl - 1;
      if (s[i] === s[j] && cl === 2) {
        dp[i][j] = 2;
      } else if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }
  return dp[0][n - 1];
}

// Example usage:
console.log(longestPalindromicSubsequence("bbabcbcab")); 
// Output: 7 ("babcbab")
