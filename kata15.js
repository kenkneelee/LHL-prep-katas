const organizeInstructors = function (instructors) {
  // Declare output object
  let organized = {};
  // Iterate through every instructor given
  for (let instructor of instructors) {
    // Check if the course exists in the organized object
    organized[instructor.course]
      ? // If it exists, add this instructor to the array of instructors who teach it
        organized[instructor.course].push(instructor.name)
      : // If it doesn't exist, initialize the array of instructors who teach it
        (organized[instructor.course] = [instructor.name]);
  }
  return organized;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
