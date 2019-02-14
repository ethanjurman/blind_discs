module.exports = {
  init: () => null,
  revealBoard: (revealState, player, actions) => {
    actions.togglePlayerTurn()
    return player
  },
  move: () => null,
}