function solveNQueens(n) {
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  let result = [];

  function isSafe(row, col) {
    // check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    // check left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    // check right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return result;
}

console.log(solveNQueens(4));
// Output: One valid arrangement like ["..Q.","Q...","...Q",".Q.."]
