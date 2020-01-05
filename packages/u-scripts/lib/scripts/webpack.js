'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'webpack'

const args = {
  default: {
    config: getConfigPath(name),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

process.exitCode = runYargs(name, args)
