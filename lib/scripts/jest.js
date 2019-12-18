'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'jest'

// https://jestjs.io/docs/en/cli
const args = {
  alias: {
    config: 'c',
  },
  default: {
    config: getConfigPath(name),
    passWithNoTests: true,
    silent: true,
  },
}

// Add line break before jest runs
console.log() // eslint-disable-line no-console

process.exitCode = runYargs(name, args)
