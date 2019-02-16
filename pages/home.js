const { PLAYER_1, PLAYER_2 } = require("../constants/gameConstants");
const Tram = require('tram-one')
const Board = require('../elements/board/board');
const RevealButton = require('../elements/reveal-button/reveal-button');
const Winner = require('../elements/winner/winner')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  Board,
  RevealButton,
  Winner,
})

const getPlayer = ({player}) => {
  switch(player) {
    case '1': return PLAYER_1
    case '2': return PLAYER_2
    default: return ''
  }
}

module.exports = (store, actions, params) => {
  window.player = getPlayer(params)

  return html`
    <div>
      <app-header />
      <div>
        <Winner />
        <Board board=${store.board} />
        <div style=${`display: flex`}><RevealButton /></div>
      </div>
    </div>
  `
}
