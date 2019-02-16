const { PLAYER_1 } = require("../../constants/gameConstants");
const Tram = require('tram-one')
const html = Tram.html()

const isSelectedSpace = ([x1, y1]) => {
  const {selectState} = window.tramEngine.store;
  if (!selectState) {
    return null;
  }
  const [x2, y2] = selectState;
  return x1 == x2 && y1 == y2;
};

module.exports = ({x, y, player}) => {
  const isPlayerTurn = window.tramEngine.store.turn === player
  const isPlayer = window.player === player

  const style = `
    background: ${player === PLAYER_1 ? 'white' : 'black'};
    cursor: pointer;
    border: solid 5px ${isPlayer && isPlayerTurn ? '#03a9f4' : 'gray'};
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border-color: ${isPlayer && isSelectedSpace([x,y]) ? '#ff9800': ''};
  `
  
  const onSelectPiece = (event) => {
    if (x && y && isPlayerTurn && isPlayer) {
      window.tramEngine.actions.selectPlayerPiece([x, y])
    }
  }

  return html`
    <div style=${style} onclick=${onSelectPiece} />
  `
}
