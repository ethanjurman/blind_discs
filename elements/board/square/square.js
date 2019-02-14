const Tram = require('tram-one')
const html = Tram.html()

module.exports = ({x, y}, children) => {
  const style = `
    background: white;
    border: solid 6px black;
    margin: -3px -3px;
    width: 70px;
    height: 70px;
  `

  const onSelectSquare = (event) => {
    const {turn} = window.tramEngine.store
    const {player} = window
    if (turn !== player) {
      return null
    }
    if (x && y) {
      window.tramEngine.actions.selectSpace([x, y])
    }
    // else it has a piece on it
  }
  
  return html`
    <div style=${style} onclick=${onSelectSquare}>
      ${children}
    </div>
  `
}
