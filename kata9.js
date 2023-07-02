const camelCase = function (input) {
  // Convert the input string to an array of its words
  let wordsArray = input.split(" ");
  // Use for loop to iterate through all words except the first word
  for (let i = 1; i < wordsArray.length; i++) {
    // Reassign the word to the first letter (capitalized using String.toUpperCase()) + the rest of the string, obtained using String.slice()
    wordsArray[i] =
      wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  }
  // Use Array.join() to convert the updated word array into an unseparated string. ("") instead of ().
  return wordsArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
