const path = require('path')
const moduleConfig = require('./webpack-module.config')

module.exports = env => ({
  entry: './main.js',
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    inline: true,
    host: '0.0.0.0'
  },
  mode: env,
  module: moduleConfig(env),
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
})
