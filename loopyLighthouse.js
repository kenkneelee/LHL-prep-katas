// Use for loop to set 100 as start point, 200 as end point, and increment by 1
for (let i = 100; i <= 200; i++) {
  // First, check to see if both conditions are true (divisible by 3 and 4)
  if (i % 3 == 0 && i % 4 == 0) {
    console.log("LoopyLighthouse");
  }
  // If not, check if each individual condition is true
  // Divisible by 3
  else if (i % 3 == 0) {
    console.log("Loopy");
  }
  // Divisible by 4
  else if (i % 4 == 0) {
    console.log("Lighthouse");
  }
  // If neither condition is true then print the number
  else {
    console.log(i);
  }
}
