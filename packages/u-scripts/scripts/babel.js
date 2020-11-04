'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const name = 'babel'
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)

const run = rewire(name, {
  boolean: ['no-babelrc'],

  // https://babeljs.io/docs/en/babel-cli/
  default: {
    'config-file': getConfigPath(name, {}, defaultConfigFile),
    'no-babelrc': true,
  },
})

run()
