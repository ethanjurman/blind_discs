const intialState = null;

const isClose = (pos1, pos2) => {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
}

module.exports = {
  init: () => intialState,
  selectPlayerPiece: (lastSelection, newSelection) => newSelection,
  selectSpace: (lastSelection, newSelection, actions) => {
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
