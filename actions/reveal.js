module.exports = {
  init: () => [false, null],
  revealBoard: (revealState, params, actions) => {
    const {turn, player} = window.tramEngine.store
    if (turn !== player) {
      // don't do anything, you are not the current player
      return revealState
    }
    return [true, player]
  },
  togglePlayerTurn: () => [false, null],
}