// Find missing number in array from 1 to n
function findMissing(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5], 5)); // Output: 3
