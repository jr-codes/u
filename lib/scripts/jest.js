'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'jest'

// https://jestjs.io/docs/en/cli
const args = getArgs({
  alias: {
    config: 'c',
  },
  default: {
    config: getConfigPath(name),
    passWithNoTests: true,
    silent: true,
  },
})

const options = {
  env: {
    BABEL_ENV: 'test',
    NODE_ENV: 'test',
  },
}

// Add line break before jest runs
console.log() // eslint-disable-line no-console

process.exitCode = run(name, args, options)
