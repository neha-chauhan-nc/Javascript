// Calculate average of numbers in an array
function averageArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

console.log(averageArray([10, 20, 30, 40])); // Output: 25
