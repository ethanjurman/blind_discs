const {PLAYER_1, PLAYER_2 } = require('../../constants/gameConstants');
const Tram = require('tram-one')
const Square = require('./square/square');
const GamePiece = require('../game-piece/game-piece');
const html = Tram.html({Square, GamePiece});

const rowStyle = `
  display: flex;
  justify-content: center;
`

module.exports = ({board}) => {
  const player = window.player
  const playerToReveal = window.tramEngine.store.reveal
  const isRevealedToPlayer1 = playerToReveal === PLAYER_1
  const isRevealedToPlayer2 = playerToReveal === PLAYER_2
  const boardRenders = board.map((row, x) => {
    return row.map((square, y) => {
      if (square === PLAYER_1 && (player === PLAYER_1 || isRevealedToPlayer2)) {
        return html`<Square><GamePiece x=${x} y=${y} player=${PLAYER_1} /></Square>`
      }
      if (square === PLAYER_2 && (player === PLAYER_2 || isRevealedToPlayer1)) {
        return html`<Square><GamePiece x=${x} y=${y} player=${PLAYER_2} /></Square>`
      }
      return html`<Square x=${x} y=${y} />`
    })
  }).map((renderedRow) => {
    return html`<div style=${rowStyle} >${renderedRow}</div>`
  })
  
  return html`
    <div>
      ${boardRenders}
    </div>
  `
}
