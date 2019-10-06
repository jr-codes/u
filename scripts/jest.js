'use strict'

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'jest'
const config = getConfigPath(name)

// https://jestjs.io/docs/en/cli
const args = getArgs({
  alias: {
    config: 'c',
  },
  default: {
    config,
    passWithNoTests: true,
    silent: true,
  },
})

process.exitCode = run(name, args)
