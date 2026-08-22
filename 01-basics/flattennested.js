// Flatten nested arrays into single array
function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]
