// Find common elements between two arrays
function intersection(arr1, arr2) {
  let result = [];
  for (let item of arr1) {
    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]
