const Tram = require('tram-one')
const html = Tram.html({})

const { PLAYER_1, PLAYER_2 } = require("../../constants/gameConstants");
const noMorePieces = (player, grid) => !grid.some((row) => row.some((square) => square === player));
const checkRowForPiece = (grid, row, player) => grid[row].some((square) => square === player);

const shouldGameEnd = (grid) => {
  const topRowHasPlayer2 = checkRowForPiece(grid, 0, PLAYER_2);
  if (topRowHasPlayer2) {
    // PLAYER 2 WINS!
    
    return [true, PLAYER_2, `A Black piece made it across the board`];
  }

  const bottomRowHasPlayer1 = checkRowForPiece(grid, 5, PLAYER_1);
  if (bottomRowHasPlayer1) {
    // PLAYER 1 WINS!
    return [true, PLAYER_1, `A White piece made it across the board`];
  }

  const noMorePlayer1Pieces = noMorePieces(PLAYER_1, grid);
  if (noMorePlayer1Pieces) {
    // PLAYER 2 WINS!
    return [true, PLAYER_2, `There are no more White pieces`]
  }

  const noMorePlayer2Pieces = noMorePieces(PLAYER_2, grid);
  if (noMorePlayer2Pieces) {
    // PLAYER 1 WINS!
    return [true, PLAYER_1, `There are no more Black pieces`]
  }

  return [false];
}

const getWinLoseString = (winningPlayer) => {
  const player = window.player

  if (player === winningPlayer) {
    return "You Win!"
  } else {
    return "You Lose."
  }
}

module.exports = () => {
  const {board} = window.tramEngine.store
  if (board) {
    const [isFinished, winningPlayer, reason] = shouldGameEnd(board)
    const winLoseString = getWinLoseString(winningPlayer)
    if (isFinished) {
      return html`
        <div>
          <b>${winLoseString}</b>
          <div>${reason}</div>
        </div>
      `
    }
  }
  
  return html`
    <div></div>
  `
}