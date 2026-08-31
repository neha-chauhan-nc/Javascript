function subsetSum(nums, target) {
  let n = nums.length;
  let dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

  for (let i = 0; i <= n; i++) dp[i][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let sum = 1; sum <= target; sum++) {
      if (nums[i - 1] <= sum) {
        dp[i][sum] = dp[i - 1][sum] || dp[i - 1][sum - nums[i - 1]];
      } else {
        dp[i][sum] = dp[i - 1][sum];
      }
    }
  }
  return dp[n][target];
}

// Example usage:
console.log(subsetSum([3, 34, 4, 12, 5, 2], 9)); 
// Output: true (subset [4,5] or [3,2,4])
