const conditionalSum = function (values, condition) {
  // Declare variable to store sum
  sum = 0;
  // Check for condition before looping through array and adding to sum if condition is met
  if (condition == "even") {
    for (let value of values) {
      if (value % 2 === 0) {
        sum += value;
      }
    }
  }
  if (condition == "odd") {
    for (let value of values) {
      if (value % 2 !== 0) {
        sum += value;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
