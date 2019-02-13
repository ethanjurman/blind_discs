const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const style = `
    background: white;
    cursor: pointer;
    border: solid 6px black;
    margin: -3px -3px;
    width: 70px;
    height: 70px;
  `
  
  return html`
    <div style=${style}>
      ${children}
    </div>
  `
}
