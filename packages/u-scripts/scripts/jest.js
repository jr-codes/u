'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const name = 'jest'
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)

const run = rewire(name, {
  // https://jestjs.io/docs/en/cli
  alias: {
    config: 'c',
  },

  boolean: ['pass-with-no-tests', 'silent'],

  default: {
    config: getConfigPath(name, {}, defaultConfigFile),
    'pass-with-no-tests': true,
    silent: true,
  },
})

// Add line break before jest runs
console.log() // eslint-disable-line no-console

run()
