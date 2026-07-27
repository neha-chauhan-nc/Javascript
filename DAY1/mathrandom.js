// Random Number Guessing Game
let secretNumber = Math.floor(Math.random() * 10) + 1; // 1 se 10 tak random number
let guess = prompt("Guess a number between 1 and 10:");

if (Number(guess) === secretNumber) {
  alert("🎉 Correct! The secret number was " + secretNumber);
} else {
  alert("❌ Wrong! The secret number was " + secretNumber);
}
