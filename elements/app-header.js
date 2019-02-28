const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  const style = `
    color: white;
    background: black;
    text-align: center;
    padding: 8px;
    user-select: none;
    border-radius: 50px;
    `
  return html`
    <h1 style=${style}>
      Shadow Checkers
    </h1>
  `
}
