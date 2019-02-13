const Tram = require('tram-one')
const Board = require('../elements/board/board');
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  Board,
})

module.exports = (store, actions) => {
  return html`
    <div>
      <app-header />
      <div>
        <Board board=${store.board} />
      </div>
    </div>
  `
}
