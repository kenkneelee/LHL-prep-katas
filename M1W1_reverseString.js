// Declare variable to store arguments into an array of words
const argsTrimmed = process.argv.slice(2);

// Declare function to process args
const reverseString = function(wordArray) {
  // Empty array to store reversed words
  let reversedWords = [];
  // Iterate through every word
  for (let thisWord of wordArray) {
    // Store letters in reversedWord variable in reverse order
    let reversedWord = [];
    for (let j = thisWord.length; j >= 0; j--) {
      reversedWord.push(thisWord.charAt(j));
    }
    // Convert reversedWord to a string before adding it to reversedWords array
    reversedWords.push(reversedWord.join(""));
  }
  return reversedWords;
};

// Log result to terminal
for (let word of reverseString(argsTrimmed)) {
  console.log(word);
}
