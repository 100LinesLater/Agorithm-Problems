const validTicTacToe = function (board) {
  let horizontals = board;
  let verticals = ["", "", ""];
  let diagonals = [
    board[0][0] + board[1][1] + board[2][2],
    board[0][2] + board[1][1] + board[2][0]
  ];
  let numX, numO = numX = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') numX++;
      if (board[i][j] === 'O') numO++;
      verticals[i] += board[j][i];
    }
  }
  if (numO > numX) return false;
  if (numX > numO + 1) return false;

  let all = horizontals.concat(verticals).concat(diagonals);
  if (numO < numX && all.includes("OOO")) return false;
  if (numO === numX && all.includes("XXX")) return false;
  return true;
};