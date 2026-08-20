// Find median of an array
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}

console.log(findMedian([7, 1, 3, 2, 9])); // Output: 3
console.log(findMedian([1, 2, 3, 4]));    // Output: 2.5
