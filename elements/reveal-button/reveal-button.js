const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  const style = `
    background: white;
    cursor: pointer;
    border: solid 5px gray;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    margin: 20px auto;
    font-weight: bold;
  `

  const revealBoard = (event) => {
    const {turn} = window.tramEngine.store
    const {player} = window
    if (turn === player) {
      window.tramEngine.actions.revealBoard(player)
    }
  }

  return html`
    <button style=${style} onclick=${revealBoard}> REVEAL </button>
  `
}
