'use strict'

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'

const getArgs = require('../utils/get-args')
const findConfig = require('../utils/find-config')
const run = require('../utils/run')

const name = 'jest'
const config = findConfig(name).filepath
const args = getArgs({
  alias: {
    config: 'c',
  },
  default: {
    config
  }
})

process.exitCode = run(name, args)
