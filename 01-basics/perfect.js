// Perfect number: sum of divisors equals the number
function perfectNumbers(n) {
  let result = [];
  for (let num = 2; num <= n; num++) {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num) {
      result.push(num);
    }
  }
  return result;
}

console.log(perfectNumbers(1000));
// Output: [6, 28, 496]
