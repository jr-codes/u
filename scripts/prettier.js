'use strict'

const getArgs = require('../utils/get-args')
const findConfig = require('../utils/find-config')
const run = require('../utils/run')

const name = 'prettier'
const config = findConfig(name).filepath
const args = getArgs({
  default: {
    config,
    ignorePath: require.resolve('../config/.prettierignore'),
  },
})

process.exitCode = run(name, args)
