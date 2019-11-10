'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'prettier'

// https://prettier.io/docs/en/cli.html
const args = {
  default: {
    config: getConfigPath(name),
    ignorePath: require.resolve('../../config/.prettierignore'),
  },
}

// Add line break before prettier runs
console.log() // eslint-disable-line no-console

process.exitCode = runYargs(name, args)
