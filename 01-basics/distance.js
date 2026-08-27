function editDistance(str1, str2) {
  let m = str1.length, n = str2.length;
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],    // delete
          dp[i][j - 1],    // insert
          dp[i - 1][j - 1] // replace
        );
      }
    }
  }
  return dp[m][n];
}

// Example usage:
console.log(editDistance("kitten", "sitting")); 
// Output: 3 (replace 'k'→'s', replace 'e'→'i', insert 'g')
