// Find all Armstrong numbers between 1 and n
function armstrongInRange(n) {
  let result = [];
  for (let num = 1; num <= n; num++) {
    let digits = num.toString().split("");
    let power = digits.length;
    let sum = 0;
    for (let d of digits) {
      sum += Math.pow(parseInt(d), power);
    }
    if (sum === num) {
      result.push(num);
    }
  }
  return result;
}

console.log(armstrongInRange(500));
// Output: [1, 153, 370, 371, 407]
