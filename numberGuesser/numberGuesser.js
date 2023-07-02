// import npm package
let prompt = require("prompt-sync")();

// Generate random integer from 1-100
const number = Math.floor(Math.random() * 100 + 1);
// For debugging so no need to guess 100 times
console.log(number);

// Store guesses so far
let guesses = [];
// Store win state
let win = false;
// Initialize user's guess variable
let answer;

// Repeat loop until user wins
while (!win) {
  // At beginning of each round, prompt user for a new guess
  answer = Number(prompt("Guess a number: "));
  // First check if answer is NaN so other "if"s don't run if not
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
  } else if (answer === number) {
    guesses.push(answer);
    console.log("You got it! You took " + guesses.length + " attempts!");
    win = true;
  } else if (answer > number) {
    if (guesses.includes(answer)) {
      console.log("Already guessed!");
    } else {
      guesses.push(answer);
      console.log("Too High!");
    }
  } else if (answer < number) {
    if (guesses.includes(answer)) {
      console.log("Already Guessed!");
    } else {
      guesses.push(answer);
      console.log("Too Low!");
    }
  }
}

console.log("You answered: " + answer);
