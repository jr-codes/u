'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const args = {
  default: {
    config: getConfigPath('webpack'),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

process.exitCode = runYargs('webpack-dev-server', args)
