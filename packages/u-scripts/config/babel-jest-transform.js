'use strict'

const babelJest = require('babel-jest')
const config = require('./babel')

config.presets[0] = [
  require.resolve('@babel/preset-env'),
  {
    targets: {
      node: 'current',
    },
  },
]

module.exports = babelJest.createTransformer(config)
