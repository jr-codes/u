'use strict'

const path = require('path')
const { getConfigPath, getIgnorePath, rewire } = require('cli-rewire')

const name = 'stylelint'
const ignoreName = `.${name}ignore`
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)
const defaultIgnoreFile = path.join(__dirname, '../configs', ignoreName)

const run = rewire(name, {
  // https://stylelint.io/user-guide/cli
  alias: {
    'ignore-path': 'i',
  },

  boolean: ['cache'],

  default: {
    cache: true,
    config: getConfigPath(name, {}, defaultConfigFile),
    'custom-formatter': require.resolve('stylelint-formatter-pretty'),
    'ignore-path': getIgnorePath(ignoreName, {}, defaultIgnoreFile),
  },
})

run()
