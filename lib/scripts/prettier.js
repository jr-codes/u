'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'prettier'

// https://prettier.io/docs/en/cli.html
const args = getArgs({
  default: {
    config: getConfigPath(name),
    ignorePath: require.resolve('../../config/.prettierignore'),
  },
})

// Add line break before prettier runs
console.log() // eslint-disable-line no-console

process.exitCode = run(name, args)
