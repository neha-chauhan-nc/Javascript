// Calculate base^exponent
function power(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 3)); // Output: 8
console.log(power(5, 4)); // Output: 625
