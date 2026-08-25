// Find majority element using frequency count
function majorityElement(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > arr.length / 2) {
      return num;
    }
  }
  return null;
}

console.log(majorityElement([3,3,4,2,3,3,5])); // Output: 3