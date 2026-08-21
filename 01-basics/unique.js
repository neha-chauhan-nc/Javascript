// Return only unique elements from an array
function uniqueElements(arr) {
  return [...new Set(arr)];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]
