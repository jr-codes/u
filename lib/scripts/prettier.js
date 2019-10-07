'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'prettier'
const config = getConfigPath(name)

// https://prettier.io/docs/en/cli.html
const args = getArgs({
  default: {
    config,
    ignorePath: require.resolve('../../config/.prettierignore'),
  },
})

process.exitCode = run(name, args)
