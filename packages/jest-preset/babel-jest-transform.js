'use strict'

const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  presets: [require.resolve('@jr.codes/babel-preset')],
  babelrc: false,
  configFile: false,
})
