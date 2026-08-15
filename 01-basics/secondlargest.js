// Find the second largest number in an array
function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
