const Tram = require('tram-one')
const html = Tram.html()

const style = `
  position: absolute;
  right: 20px;
  margin-top: -55px;
`

module.exports = () => {
  const turnPlayer = window.tramEngine.store.turn;
  return html`
    <h1 style=${style} onclick=${window.tramEngine.actions.togglePlayerTurn}>
      ${turnPlayer}'s turn 
    </h1>
  `
}
