// Filter out negative numbers
function removeNegatives(arr) {
  return arr.filter(num => num >= 0);
}

console.log(removeNegatives([10, -5, 20, -30, 40]));
// Output: [10, 20, 40]
