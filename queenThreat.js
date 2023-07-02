const generateBoard = function (white, black) {
  // Initialize empty board
  let board = [];
  // Populate empty board with empty rows
  for (let i = 0; i < 8; i++) {
    board.push([]);
    // Populate empty rows with 0's in 8 columns
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  // Set value of both queen positions to 1
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
};

const queenThreat = function (board) {
  // Get the coordinates of the Queens (reverse generateBoard)
  let queens = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 1) {
        queens.push([x, y]);
      }
    }
  }
  // Check if Queens are in the same row by checking x coord
  // Check if Queens are in the same column by checking y coord
  if (queens[0][0] == queens[1][0] || queens[0][1] == queens[1][1]) {
    return true;
  }
  // Check if Queens are in the same diagonal
  if (
    Math.abs(queens[0][0] - queens[1][0]) ==
    Math.abs(queens[0][1] - queens[1][1])
  ) {
    return true;
  }
  // No threat if Queens are not in the same vertical, horizontal, or diagonal lines
  return false;
};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
