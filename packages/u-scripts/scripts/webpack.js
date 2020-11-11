'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const name = 'webpack'
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)

const run = rewire(name, {
  default: {
    config: getConfigPath(name, {}, defaultConfigFile),
  },
})

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

run()
