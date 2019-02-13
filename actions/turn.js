const { PLAYER_1, PLAYER_2 } = require("../constants/gameConstants")
const initialState = PLAYER_1;

module.exports = {
  init: () => initialState,
  togglePlayerTurn: (player) => player === PLAYER_1 ? PLAYER_2 : PLAYER_1,
}