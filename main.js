const Tram = require('tram-one')
require("babel-polyfill")

window.tramEngine = {}
const app = new Tram( { webEngine: window.tramEngine } )
app.addRoute('/blind_discs/:room/:player', require('./pages/home'))
app.addRoute('/:room/:player', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/blind_discs/no-js', require('./pages/no-js'))
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
  const [room] = window.location.hash.slice(1).split('/')

  const roomSocket = new WebSocket(`wss://socket-bouncer.com:5150/blind_discs/${room}`)
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

