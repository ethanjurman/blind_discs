const {PLAYER_1, PLAYER_2 } = require('../../constants/gameConstants');
const Tram = require('tram-one')
const Square = require('./square/square');
const BlackPiece = require('../game-piece/black-piece');
const WhitePiece = require('../game-piece/white-piece');
const html = Tram.html({Square, WhitePiece, BlackPiece});

const rowStyle = `
  display: flex;
  justify-content: center;
`

module.exports = ({board}) => {
  const boardRenders = board.map((row) => {
    return row.map((square) => {
      if (square === PLAYER_1) {
        return html`<Square><WhitePiece /></Square>`
      }
      if (square === PLAYER_2) {
        return html`<Square><BlackPiece /></Square>`
      }
      return html`<Square />`
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
