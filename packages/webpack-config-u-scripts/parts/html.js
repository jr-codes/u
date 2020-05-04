'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (config) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: require.resolve('../templates/index.html'),
      title: 'My App',
    })
  )

  return config
}
