const calculateChange = function (total, cash) {
  // Declare object to store final output
  let change = {};

  // Define key-value pairs of available change denominations and their values in cents
  let values = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  // Calculate total amount of change to collect in cents and store it in a variable
  let difference = cash - total;

  // Iterate through each possible denomination, from highest to lowest:
  for (let denom in values) {
    // Collect bills/coins to fulfill total change requirement
    while (difference >= values[denom]) {
      // Adjust remaining change to be collected
      difference -= values[denom];
      // Check if any of the denom have been collected. Increment if so; create new property if not
      change[denom] ? change[denom]++ : (change[denom] = 1);
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Before refactoring
// while (difference > 0) {
//   if (difference > 2000) {
//     difference -= 2000;
//     change.twentyDollar ? change.twentyDollar++ : (change.twentyDollar = 1);
//   } else if (difference >= 1000) {
//     difference -= 1000;
//     change.tenDollar ? change.tenDollar++ : (change.tenDollar = 1);
//   } else if (difference >= 500) {
//     difference -= 500;
//     change.fiveDollar ? change.fiveDollar++ : (change.fiveDollar = 1);
//   } else if (difference >= 200) {
//     difference -= 200;
//     change.twoDollars ? change.twoDollars++ : (change.twoDollars = 1);
//   } else if (difference >= 100) {
//     difference -= 100;
//     change.oneDollar ? change.oneDollar++ : (change.oneDollar = 1);
//   } else if (difference >= 25) {
//     difference -= 25;
//     change.quarter ? change.quarter++ : (change.quarter = 1);
//   } else if (difference >= 10) {
//     difference -= 10;
//     change.dime ? change.dime++ : (change.dime = 1);
//   } else if (difference >= 5) {
//     difference -= 5;
//     change.nickel ? change.nickel++ : (change.nickel = 1);
//   } else if (difference >= 1) {
//     difference -= 1;
//     change.penny ? change.penny++ : (change.penny = 1);
//   }
// }
