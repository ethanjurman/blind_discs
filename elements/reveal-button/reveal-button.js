const { PLAYER_1 } = require("../../constants/gameConstants");
const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  const style = `
    background: 'white';
    cursor: pointer;
    border: solid 5px gray;
    width: 100px;
    height: 60px;
  `

  const revealBoard = (event) => {
    window.tramEngine.actions.revealBoard();
  }

  return html`
    <button style=${style} onclick=${revealBoard}> REVEAL </button>
  `
}
