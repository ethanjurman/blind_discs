const Tram = require('tram-one')
require("babel-polyfill")

window.tramEngine = {}
const app = new Tram( { webEngine: window.tramEngine } )
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/no-js', require('./pages/no-js'))
app.addActions({ 
  board: require('./actions/board'), 
  selectState: require('./actions/selectState'),
  player: require('./actions/player'),
  turn: require('./actions/turn'),
  reveal: require('./actions/reveal'),
})
app.start('.main')

app.addListener((...args) => console.log(args))