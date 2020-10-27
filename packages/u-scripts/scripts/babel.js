'use strict'

const path = require('path')
const { getConfigPath, rewire } = require('cli-rewire')

const name = 'babel'
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)

const run = rewire(name, {
  // https://babeljs.io/docs/en/babel-cli/
  default: {
    configFile: getConfigPath(name, {}, defaultConfigFile),
    noBabelrc: true,
  },
})

run()
