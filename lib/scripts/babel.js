'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'babel'
const configFile = getConfigPath(name)

// https://babeljs.io/docs/en/babel-cli/
const args = getArgs({
  default: {
    configFile,
    noBabelrc: true,
  },
})

process.exitCode = run(name, args)
