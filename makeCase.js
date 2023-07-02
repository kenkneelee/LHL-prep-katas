const makeCase = function (input, casing) {
  // Declare empty output string
  let output = "";
  // Declare variables for use in operations. Split input into words, and split input into letters
  let inputArray = input.split(" ");
  let inputLetters = input.split("");

  // If only one case parameter given
  if (!Array.isArray(casing)) {
    // Switch case for chosen operation
    switch (casing) {
      // Camel - capitalize first letter of all words except first, remove spaces
      case "camel":
        for (let i = 1; i < inputArray.length; i++) {
          inputArray[i] =
            inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
        }
        output = inputArray.join("");
        break;

      // Pascal - capitalize first letter of all words, remove spaces
      case "pascal":
        for (let i = 0; i < inputArray.length; i++) {
          inputArray[i] =
            inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
        }
        output = inputArray.join("");
        break;
      // Snake - replace spaces with underscores
      case "snake":
        output = inputArray.join("_");
        break;
      // Kebab - replace spaces with dashes
      case "kebab":
        output = inputArray.join("-");
        break;
      // Title - capitalize first letter of each word
      case "title":
        for (let i = 0; i < inputArray.length; i++) {
          inputArray[i] =
            inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
        }
        output = inputArray.join(" ");
        break;
      // Vowel - capitalize all vowels
      case "vowel":
        for (i = 0; i < inputLetters.length; i++) {
          if (
            inputLetters[i] == "a" ||
            inputLetters[i] == "e" ||
            inputLetters[i] == "i" ||
            inputLetters[i] == "o" ||
            inputLetters[i] == "u"
          ) {
            inputLetters[i] = inputLetters[i].toUpperCase();
          }
        }
        output = inputLetters.join("");
        break;
      // Consonant - capitalize all consonants
      case "consonant":
        for (i = 0; i < inputLetters.length; i++) {
          if (
            inputLetters[i] !== "a" &&
            inputLetters[i] !== "e" &&
            inputLetters[i] !== "i" &&
            inputLetters[i] !== "o" &&
            inputLetters[i] !== "u"
          ) {
            inputLetters[i] = inputLetters[i].toUpperCase();
          }
        }
        output = inputLetters.join("");
        break;
      // Upper - capitalize everything
      case "upper":
        for (let i = 0; i < inputLetters.length; i++) {
          inputLetters[i] = inputLetters[i].toUpperCase();
        }
        output = inputLetters.join("");
        break;
      // Lower - uncapitalize everything
      case "lower":
        for (let i = 0; i < inputLetters.length; i++) {
          inputLetters[i] = inputLetters[i].toLowerCase();
        }
        output = inputLetters.join("");
        break;
    }
    // If multiple case parameters given
  } else {
    // Use recursion (I think) to run the function multiple times if multiple case parameters given
    let intermediate = input;
    // Iterate through each given parameter
    for (let i = 0; i < casing.length; i++) {
      intermediate = makeCase(intermediate, casing[i]);
    }
    output = intermediate;
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
