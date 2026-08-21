// Reverse each word in a sentence
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Neha loves coding"));
// Output: "ah eN sevol gnidoc"
