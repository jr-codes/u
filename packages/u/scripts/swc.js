'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const name = 'swc'
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)

const run = rewire(name, {
  boolean: ['no-swcrc'],

  // https://swc.rs/docs/usage/cli
  default: {
    'config-file': getConfigPath(name, {}, defaultConfigFile),
    'no-swcrc': true,
  },
})

run()
