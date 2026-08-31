function minCutPalindromePartition(s) {
  let n = s.length;
  let dp = Array(n).fill(0);
  let isPal = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    let minCuts = i;
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j < 2 || isPal[j + 1][i - 1])) {
        isPal[j][i] = true;
        minCuts = j === 0 ? 0 : Math.min(minCuts, dp[j - 1] + 1);
      }
    }
    dp[i] = minCuts;
  }
  return dp[n - 1];
}

// Example usage:
console.log(minCutPalindromePartition("aab")); 
// Output: 1 ("aa" | "b")
