// Find duplicate words in a sentence
function duplicateWords(sentence) {
  let words = sentence.toLowerCase().split(" ");
  let freq = {};
  let duplicates = [];
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
    if (freq[word] === 2) {
      duplicates.push(word);
    }
  }
  return duplicates;
}

console.log(duplicateWords("Neha loves coding and Neha loves JavaScript"));
// Output: ["neha", "loves"]
