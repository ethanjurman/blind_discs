const { PLAYER_1 } = require("../../constants/gameConstants");
const Tram = require('tram-one')
const html = Tram.html()

module.exports = ({x, y, player}) => {
  const style = `
    background: ${player === PLAYER_1 ? 'lightgray' : 'black'};
    cursor: pointer;
    border: solid 5px gray;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  `

  const onSelectPiece = (event) => {
    if (x && y) {
      window.tramEngine.actions.selectPlayerPiece([x, y])
    }
  }

  return html`
    <div style=${style} onclick=${onSelectPiece} />
  `
}
