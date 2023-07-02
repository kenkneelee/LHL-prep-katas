const repeatNumbers = function (data) {
  // Declare empty array to store outputs in
  let output = [];
  // Iterate over each array pair given using for..of loop
  for (let pair of data) {
    // Convert the value to repeat to a string using Number.toString()
    // Use String.repeat() to repeat that string as many times as specified
    // Push repeated string to the output array
    output.push(pair[0].toString().repeat(pair[1]));
  }
  // Use Array.join() to turn output array into a string, separated by a comma + space and return it
  return output.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
