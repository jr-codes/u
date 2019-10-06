'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'webpack'
const config = getConfigPath(name)

// https://webpack.js.org/api/cli/
const args = getArgs({
  default: {
    config,
  },
})

process.exitCode = run(name, args)
