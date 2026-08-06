// Find sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;   // get last digit
    num = Math.floor(num / 10); // remove last digit
  }
  return sum;
}

console.log(sumOfDigits(1234)); // Output: 10
