const intialState = null;

const isClose = (pos1, pos2) => {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;
  return x1 - x2 <= 1 && y1 - y2 <= 1;
}

module.exports = {
  init: () => intialState,
  selectPlayerPiece: (lastSelection, newSelection) => newSelection,
  selectSpace: (lastSelection, newSelection, actions) => {
    const {turn, player} = window.tramEngine.store;
    if (turn !== player) {
      return null
    }
    if (!lastSelection) {
      return newSelection
    }
    if (lastSelection) {
      // trigger actions.move lastSelection -> newSelection if we're close
      if (isClose(lastSelection, newSelection)) {
        actions.move([lastSelection, newSelection])
        return null
      }
      return newSelection
    }
  } 
}
