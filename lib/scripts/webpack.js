'use strict'

/* eslint-disable no-console */

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

// Add line break before webpack runs
console.log()
process.exitCode = run(name, args)
