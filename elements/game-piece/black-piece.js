const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const style = `
    background: black;
    cursor: pointer;
    border: solid 5px gray;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  `

  return html`
    <div style=${style} draggable="true" />
  `
}
