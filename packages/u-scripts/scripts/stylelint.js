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
    ignorePath: 'i',
  },
  default: {
    cache: true,
    config: getConfigPath(name, {}, defaultConfigFile),
    customFormatter: require.resolve('stylelint-formatter-pretty'),
    ignorePath: getIgnorePath(ignoreName, {}, defaultIgnoreFile),
  },
})

run()
