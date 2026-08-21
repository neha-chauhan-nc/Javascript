// Check if array is sorted in ascending order
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4]));   // Output: true
console.log(isSorted([1, 3, 2, 4]));   // Output: false
