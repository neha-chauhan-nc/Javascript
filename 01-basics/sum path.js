function maxPathSum(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  dp[0][0] = matrix[0][0];

  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + matrix[0][j];
  }

  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }

  // Fill rest of matrix
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = matrix[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}

// Example usage:
let mat = [
  [5, 3, 2],
  [1, 9, 1],
  [0, 2, 7]
];
console.log(maxPathSum(mat)); 
// Output: 24 (path 5→3→9→2→7)
