// Print multiplication table of a number
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

multiplicationTable(5);
/*
Output:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/
