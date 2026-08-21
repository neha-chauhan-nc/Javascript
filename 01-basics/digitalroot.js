// Keep summing digits until single digit remains
function digitalRoot(num) {
  while (num >= 10) {
    num = num.toString().split("").reduce((sum, d) => sum + parseInt(d), 0);
  }
  return num;
}

console.log(digitalRoot(9875)); // Output: 2 (9+8+7+5=29 → 2+9=11 → 1+1=2)
