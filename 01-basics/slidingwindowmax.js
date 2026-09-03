function maxSlidingWindow(nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // remove indices out of window
    if (deque.length && deque[0] <= i - k) deque.shift();

    // maintain decreasing order
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}

// Example usage:
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Output: [3,3,5,5,6,7]
