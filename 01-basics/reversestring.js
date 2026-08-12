// Reverse each word in a sentence
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = words.map(word => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

console.log(reverseWords("Neha loves coding"));
// Output: "ah eN sevol gnidoc"
