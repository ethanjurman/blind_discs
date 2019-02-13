const Tram = require('tram-one')
const Board = require('../elements/board/board');
const RevealButton = require('../elements/reveal-button/reveal-button');
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  Board,
  RevealButton,
})

module.exports = (store, actions) => {
  return html`
    <div>
      <app-header />
      <div>
        <RevealButton />
        <Board board=${store.board} />
      </div>
    </div>
  `
}
