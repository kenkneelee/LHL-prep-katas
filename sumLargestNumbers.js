// Without sort()
const sumLargestNumbers = function (data) {
  // Declare variables to store the highest and second highest values
  let highest = 0;
  let second = 0;

  // For loop to iterate through the data array checking for the highest number
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highest) {
      highest = data[i];
    }
  }
  // Check for second highest number using same method but comparing value to previously assigned highest
  for (let j = 0; j < data.length; j++) {
    if (data[j] > second && data[j] < highest) {
      second = data[j];
    }
  }
  return highest + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// With sort()
// const sumLargestNumbers = function (data) {
//   // Declare variable and set its value to the array, sorted in descending order using array.sort()
//   let sorted = data.sort(function (a, b) {
//     return b - a;
//   });
//   // Return sum of first two elements (largest) in array if they exist
//   if (sorted.length > 1) {
//     return sorted[0] + sorted[1];
//   }
//   console.log(sorted);
// };
