'use strict'

const path = require('path')
const { getConfigPath, getIgnorePath, rewire } = require('cli-rewire')

const name = 'prettier'
const ignoreName = `.${name}ignore`
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)
const defaultIgnoreFile = path.join(__dirname, '../configs', ignoreName)

const run = rewire(name, {
  // https://prettier.io/docs/en/cli.html
  default: {
    config: getConfigPath(name, {}, defaultConfigFile),
    ignorePath: getIgnorePath(ignoreName, {}, defaultIgnoreFile),
  },
})

// Add line break before prettier runs
console.log() // eslint-disable-line no-console

run()
