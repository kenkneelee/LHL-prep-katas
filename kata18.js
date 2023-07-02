const squareCode = function (message) {
  // Helper function to split a string into an array of specified chunk size strings
  const chunkify = function (text, chunkSize) {
    let chunked = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunked.push(text.slice(i, i + chunkSize));
    }
    return chunked;
  };

  // Declare variable to store unformatted output
  let unformatted = [];
  // Remove spaces from input string and store in variable
  const noSpace = message.replaceAll(" ", "");
  // Calculate number of columns in square code
  const columns = Math.ceil(Math.sqrt(noSpace.length));

  // Define and populate square code grid using helper function
  let grid = chunkify(noSpace, columns);

  // Iterate through each column in the grid
  for (let j = 0; j < columns; j++) {
    let word = "";
    // For each column iterate through every string row
    for (let k = 0; k < grid.length; k++) {
      // If a value exists at the coordinates, push it to unformatted output array
      if (grid[k][j]) {
        word += grid[k][j];
      }
    }
    unformatted.push(word);
  }
  // Convert array to space-separated string for final output
  return unformatted.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
