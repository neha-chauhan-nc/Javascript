// Find HCF (GCD) and LCM
function hcf(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / hcf(a, b);
}

console.log("HCF:", hcf(12, 18)); // Output: 6
console.log("LCM:", lcm(12, 18)); // Output: 36
