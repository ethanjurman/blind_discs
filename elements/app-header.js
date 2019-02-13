const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  const style = `
    color: white;
    background: black;
    cursor: pointer; text-align: center;
    padding: 1em; user-select: none;
    margin: -8px -8px 8px -8px;
  `
  return html`
    <h1 style=${style}>
      blind_discs
    </h1>
  `
}
