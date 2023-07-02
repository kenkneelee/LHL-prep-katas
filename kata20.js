const blocksAway = function (directions) {
  // Declare current position and direction
  let currentPos = [0, 0];
  let currentFacing = "N";

  // Format directions into a 2d array of [turn, distance] pairs
  let formatted = [];
  for (let i = 0; i < directions.length; i += 2) {
    formatted.push(directions.slice(i, i + 2));
  }

  // Iterate through every [turn, distance] pair
  // Update current position's X or Y coordinate based on turn + distance
  // Update current facing
  for (let pair of formatted) {
    // N + right
    // N + left
    if (currentFacing == "N") {
      if (pair[0] == "left") {
        currentPos[0] = currentPos[0] - pair[1];
        currentFacing = "W";
      } else if (pair[0] == "right") {
        currentPos[0] = currentPos[0] + pair[1];
        currentFacing = "E";
      }
    }
    // E + right
    // E + left
    else if (currentFacing == "E") {
      if (pair[0] == "left") {
        currentPos[1] = currentPos[1] + pair[1];
        currentFacing = "N";
      } else if (pair[0] == "right") {
        currentPos[1] = currentPos[1] - pair[1];
        currentFacing = "S";
      }
    }
    // S + right
    // S + left
    else if (currentFacing == "S") {
      if (pair[0] == "left") {
        currentPos[0] = currentPos[0] + pair[1];
        currentFacing = "E";
      } else if (pair[0] == "right") {
        currentPos[0] = currentPos[0] - pair[1];
        currentFacing = "W";
      }
    }
    // W + right
    // W + left
    else if (currentFacing == "W") {
      if (pair[0] == "left") {
        currentPos[1] = currentPos[1] - pair[1];
        currentFacing = "S";
      } else if (pair[0] == "right") {
        currentPos[1] = currentPos[1] + pair[1];
        currentFacing = "N";
      }
    }
  }

  return {
    east: currentPos[0],
    north: currentPos[1],
  };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
