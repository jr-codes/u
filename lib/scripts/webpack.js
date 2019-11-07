'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'webpack'

// https://webpack.js.org/api/cli/
const args = getArgs({
  default: {
    config: getConfigPath(name)
  },
})

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

process.exitCode = run(name, args)
