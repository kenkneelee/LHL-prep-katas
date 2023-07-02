const multiplicationTable = function (maxValue) {
  // Declare empty variable to store 2d array grid
  let output = [];
  // Iterate from 1 to the max value
  for (let y = 1; y <= maxValue; y++) {
    // Create a new empty row for each y value
    let row = [];
    // For each row, iterate through its columns
    for (let x = 1; x <= maxValue; x++) {
      // Populate row with values according to current x and y coordinate
      row.push(y * x);
    }
    // Convert rows from arrays to space-separated strings
    output.push(row.join(" "));
  }
  // Join rows into a line-separated grid string
  return output.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
