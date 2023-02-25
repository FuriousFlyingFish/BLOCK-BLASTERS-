// Block Blaster Game Code

// Create a 2D array to hold the game board
var board = [];

// Initialize the game board with random block colors
function initBoard(rows, cols) {
  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < cols; c++) {
      row.push(getRandomBlockColor());
    }
    board.push(row);
  }
}

// Get a random block color from a list of possible colors
function getRandomBlockColor() {
  var colors = ["red", "blue", "green", "yellow", "purple"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Swap two adjacent blocks on the game board
function swapBlocks(row1, col1, row2, col2) {
  var temp = board[row1][col1];
  board[row1][col1] = board[row2][col2];
  board[row2][col2] = temp;
}

// Check if there are any matches on the game board
function checkMatches() {
  var matches = [];
  // Loop through each block on the board
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[r].length; c++) {
      var block = board[r][c];
      // Check for matches in each direction (up, down, left, right)
      if (r < board.length - 2 && block === board[r+1][c] && block === board[r+2][c]) {
        matches.push([r, c, "vertical"]);
      }
      if (c < board[r].length - 2 && block === board[r][c+1] && block === board[r][c+2]) {
        matches.push([r, c, "horizontal"]);
      }
    }
  }
  return matches;
}

// Remove matched blocks from the game board
function removeMatches(matches) {
  // Loop through each match and remove the blocks from the board
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    var row = match[0];
    var col = match[1];
    var direction = match[2];
    board[row][col] = null; // Remove the matched block
    if (direction === "vertical") {
      board[row+1][col] = null;
      board[row+2][col] = null;
    } else if (direction === "horizontal") {
      board[row][col+1] = null;
      board[row][col+2] = null;
    }
  }
}

// Shift blocks down to fill in gaps on the game board
function shiftBlocks() {
  // Loop through each column on the board
  for (var c = 0; c < board[0].length; c++) {
    var emptyBlocks = 0;
    // Loop through each row in the column
    for (var r = board.length - 1; r >= 0; r--) {
      var block = board[r][c];
      if (block === null) {
        emptyBlocks++;
      } else if (emptyBlocks > 0) {
        board[r+emptyBlocks][c] = block;
        board[r][c] = null;
      }
    }
  }
}

// Main game loop
function gameLoop() {
  // Check for matches and remove them from the board
  var matches = check


