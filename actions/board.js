const {PLAYER_1, PLAYER_2, EMPTY } = require('../constants/gameConstants');

const initialBoardState = [
  [PLAYER_1, PLAYER_1, PLAYER_1, PLAYER_1, PLAYER_1],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [PLAYER_2, PLAYER_2, PLAYER_2, PLAYER_2, PLAYER_2],
];

const makeNewGrid = (grid) => {
  return JSON.parse(JSON.stringify(grid));
}

const shouldGameEnd = (grid) => {
  const topRowHasPlayer2 = grid[0].some((square) => square === PLAYER_2);
  if (topRowHasPlayer2) {
    // PLAYER 2 WINS!
    return [true, 'PLAYER 2 WINS! PLAYER 2 got their piece across the board'];
  }
  const bottomRowHasPlayer1 = grid[5].some((square) => square === PLAYER_1);
  if (bottomRowHasPlayer1) {
    // PLAYER 1 WINS!
    return [true, 'PLAYER 1 WINS! PLAYER 1 got their piece across the board'];
  }
  const noMorePlayer1Pieces = !grid.some((row) => row.some(() => square === PLAYER_1));
  if (noMorePlayer1Pieces) {
    // PLAYER 2 WINS!
    return [true, 'PLAYER 2 WINS! PLAYER 1 has no more remaining pieces']
  }
  const noMorePlayer2Pieces = !grid.some((row) => row.some(() => square === PLAYER_2));
  if (noMorePlayer2Pieces) {
    // PLAYER 1 WINS!
    return [true, 'PLAYER 1 WINS! PLAYER 2 has no more remaining pieces']
  }
  return [false];
}

module.exports = {
  init: () => initialBoardState,
  move: (grid, [pos1, pos2], actions) => {
    const newGrid = makeNewGrid(grid);
    const [x1, y1] = pos1;
    const [x2, y2] = pos2;
    const piece = grid[x1][y1];
    newGrid[x2][y2] = piece;
    newGrid[x1][x2] = EMPTY;
    const [isFinished, reason] = checkGameState(newGrid);
    if (isFinished) {
      actions.endGame(reason)
    }
    return newGrid;
  },
  endGame: (grid, reason) => {
    alert(reason);
  }
}
