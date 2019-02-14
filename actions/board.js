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

module.exports = {
  init: () => initialBoardState,
  move: (grid, [pos1, pos2], actions) => {
    const newGrid = makeNewGrid(grid)
    const [x1, y1] = pos1
    const [x2, y2] = pos2
    const piece = grid[x1][y1]
    newGrid[x2][y2] = piece
    newGrid[x1][y1] = EMPTY
    actions.togglePlayerTurn()
    return newGrid
  },
}
