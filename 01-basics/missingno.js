// Find the missing number in a sequence 1..n
function findMissing(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5, 6], 6)); 
// Output: 3
