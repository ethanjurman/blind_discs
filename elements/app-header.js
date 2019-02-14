const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  const style = `
    color: white;
    background: black;
    cursor: pointer; text-align: center;
    padding: 4px; user-select: none;
    margin: 8px 0px;
  `
  return html`
    <h1 style=${style}>
      blind_discs
    </h1>
  `
}
