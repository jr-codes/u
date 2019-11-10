'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'babel'

// https://babeljs.io/docs/en/babel-cli/
const args = {
  default: {
    configFile: getConfigPath(name),
    noBabelrc: true,
  },
}

process.exitCode = runYargs(name, args)
