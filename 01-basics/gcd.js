// Find GCD of two numbers using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(48, 18)); // Output: 6
