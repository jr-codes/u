'use strict'

const scripts = [
  'babel',
  'eslint',
  'jest',
  'prettier',
  'stylelint',
  'webpack',
  'webpack-dev-server',
].reduce((a, b) => {
  a[b] = require.resolve(`./${b}`)
  return a
}, {})

module.exports = scripts
