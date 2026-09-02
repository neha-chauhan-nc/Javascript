function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
}

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); 
// Output: 6 (subarray [4,-1,2,1])
