const Tram = require('tram-one')
require("babel-polyfill")

window.tramEngine = {}
const app = new Tram( { webEngine: window.tramEngine } )
app.addRoute('/:room/:player', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/no-js', require('./pages/no-js'))
app.addActions({ 
  board: require('./actions/board'), 
  selectState: require('./actions/selectState'),
  turn: require('./actions/turn'),
  reveal: require('./actions/reveal'),
})
app.start('.main')

app.addActions({
  rerenderer: { init: () => null, triggerRender: () => null, loadStore: () => null }
})

if (window.WebSocket) {
  const roomSocket = new WebSocket(`ws://localhost:4850/9`)
  roomSocket.onmessage = ({ data }) => {
    const store = JSON.parse(data)
    app.engine.store = store
    app.engine.actions.triggerRender()
  }
  
  roomSocket.onopen = () => {
    app.addListener((store, actions, actionName, actionArgs) => {
      if (actionName !== 'triggerRender') {
        roomSocket.send(JSON.stringify(store))
      }
    })
    app.engine.actions.loadStore()
  }
}

