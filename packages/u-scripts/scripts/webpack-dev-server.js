'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const defaultConfigFile = path.join(__dirname, '../configs/webpack.js')

const run = rewire('webpack-dev-server', {
  default: {
    config: getConfigPath('webpack', {}, defaultConfigFile),
  },
})

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

run()
