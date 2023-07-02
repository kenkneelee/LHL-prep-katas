const talkingCalendar = function (date) {
  // Convert input string to a Date object
  let converted = new Date(date);

  // Use Date.getDate() method and store it for use in determining the suffix
  let day = converted.getDate();
  // Depending on the day, assign appropriate suffix
  // Default case for numbers not ending in 1, 2, or 3
  let suffix = "th";
  // Exclude 11 because it ends in "th" instead of "st"
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  }
  // Exclude 12
  else if (day === 2 || day === 22) {
    suffix = "nd";
  }
  // Exclude 13
  else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  // Declare month strings for use in final output
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Return combination of built-in Date methods, calculated suffix, and appropriate punctuation
  return (
    months[converted.getMonth()] +
    " " +
    converted.getDate() +
    suffix +
    ", " +
    converted.getFullYear()
  );
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
