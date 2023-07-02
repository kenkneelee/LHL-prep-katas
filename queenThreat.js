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
  // Check for Queens in the same row
  for (let x = 0; x < board.length; x++) {
    // Total number of queens in row
    let total = 0;
    for (let space of board[x]) {
      if (space === 1) {
        total++;
      }
    }
    if (total > 1) {
      return true;
    }
  }

  // Check for Queens in the same column
  for (let y = 0; y < board.length; y++) {
    let total = 0;
    for (let x = 0; x < board.length; x++) {
      if (board[x][y] === 1) {
        total++;
      }
    }
    if (total > 1) {
      return true;
    }
  }
  // Check for Queens in the same diagonal
  let whiteCoord = [];
  let blackCoord = [];
  for (let x = 0; x<board.length;x++) {
    for (let y = 0; y< board.length; y++) {
      if (board[x][y]===1) {

      }
    }
  }


  // If Queens are not in the same column, row, or diagonal, return false
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 6];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
