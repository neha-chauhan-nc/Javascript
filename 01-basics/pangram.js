// Pangram: sentence containing all alphabets
function isPangram(sentence) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let lower = sentence.toLowerCase();
  for (let char of alphabets) {
    if (!lower.includes(char)) return false;
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// Output: true
console.log(isPangram("Neha loves coding"));
// Output: false
