'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'stylelint'

// https://stylelint.io/user-guide/cli
const args = {
  default: {
    cache: true,
    config: getConfigPath(name),
    customFormatter: require.resolve('stylelint-formatter-pretty'),
    ignorePath: require.resolve('../../config/.stylelintignore'),
  },
}

process.exitCode = runYargs(name, args)
