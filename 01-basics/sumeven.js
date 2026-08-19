// Sum of even digits in a number
function sumEvenDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
      sum += digit;
    }
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumEvenDigits(123456)); // Output: 12 (2+4+6)
