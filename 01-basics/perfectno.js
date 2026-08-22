// Perfect number: sum of divisors = number itself
function perfectNumbers(n) {
  let result = [];
  for (let num = 2; num <= n; num++) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) sum += i;
    }
    if (sum === num) result.push(num);
  }
  return result;
}

console.log(perfectNumbers(1000));
// Output: [6, 28, 496]
