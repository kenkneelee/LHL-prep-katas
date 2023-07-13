// Declare variable to store arguments into an array of words
const argsTrimmed = process.argv.slice(2);

const pigLatin = function(wordArray) {
  let translatedWords = [];
  for (let thisWord of wordArray) {
    translatedWords.push(`${thisWord.slice(1)}${thisWord.charAt(0)}ay`);
  }
  return translatedWords.join(" ");
};

// Log result to terminal
console.log(pigLatin(argsTrimmed));
