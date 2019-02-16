const Tram = require('tram-one')
const html = Tram.html()

const getBackgroundColor = (x, y) => {
  return (x % 2 === 0) ^ (y % 2 === 0) 
    ? "rgba(230, 230, 230, 1)" 
    : "rgba(180, 180, 180, 1)"
}

const onSelectSquare = (x, y, selectable) => (event) => {
  const {turn, selectState} = window.tramEngine.store
  const {player} = window
  if (selectable == 'false' || (turn !== player)) {
    return null
  }

  if (selectState) {
    // select state should be defined from clicking a piece
    window.tramEngine.actions.selectSpace([x, y])
  }
}

module.exports = ({x, y, selectable}, children) => {
  const style = `
    background: ${getBackgroundColor(x,y)};
    border: solid 6px black;
    margin: -3px -3px;
    width: 70px;
    height: 70px;
  `

  return html`
    <div style=${style} onclick=${onSelectSquare(x, y, selectable)}>
      ${children}
    </div>
  `
}
