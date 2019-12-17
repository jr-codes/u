'use strict'

const debug = require('debug')('u:babel')
const { env, isProduction, isTest } = require('../lib/utils/env')

debug('env %s', env)

// https://babeljs.io/docs/en/configuration#babelrcjs
module.exports = {
  plugins: [
    require.resolve('babel-plugin-macros'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    isProduction && [
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      { removeImport: true },
    ],
    isTest && require.resolve('babel-plugin-dynamic-import-node'),
  ].filter(Boolean),
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
  ],
}
