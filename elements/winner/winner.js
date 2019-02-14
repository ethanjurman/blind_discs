const Tram = require('tram-one')
const html = Tram.html({})

const { PLAYER_1, PLAYER_2 } = require("../../constants/gameConstants");
const noMorePieces = (player, grid) => !grid.some((row) => row.some((square) => square === player));
const checkRowForPiece = (grid, row, player) => grid[row].some((square) => square === player);

const shouldGameEnd = (grid) => {
  const topRowHasPlayer2 = checkRowForPiece(grid, 0, PLAYER_2);
  if (topRowHasPlayer2) {
    // PLAYER 2 WINS!
    return [true, 'PLAYER 2 WINS! PLAYER 2 got their piece across the board'];
  }

  const bottomRowHasPlayer1 = checkRowForPiece(grid, 5, PLAYER_1);
  if (bottomRowHasPlayer1) {
    // PLAYER 1 WINS!
    return [true, 'PLAYER 1 WINS! PLAYER 1 got their piece across the board'];
  }

  const noMorePlayer1Pieces = noMorePieces(PLAYER_1, grid);
  if (noMorePlayer1Pieces) {
    // PLAYER 2 WINS!
    return [true, 'PLAYER 2 WINS! PLAYER 1 has no more remaining pieces']
  }

  const noMorePlayer2Pieces = noMorePieces(PLAYER_2, grid);
  if (noMorePlayer2Pieces) {
    // PLAYER 1 WINS!
    return [true, 'PLAYER 1 WINS! PLAYER 2 has no more remaining pieces']
  }

  return [false];
}

module.exports = () => {
  const {board} = window.tramEngine.store
  if (board) {
    const [isFinished, reason] = shouldGameEnd(board)
    if (isFinished) {
      return html`<div>${reason}</div>`
    }
  }
  
  return html`
    <div>No winner yet</div>
  `
}