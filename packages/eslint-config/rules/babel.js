'use strict'

module.exports = {
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@jr.codes/babel-preset')],
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },
}
