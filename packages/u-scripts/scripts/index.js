'use strict'

const path = require('path')

const scripts = [
  'babel',
  'eslint',
  'jest',
  'nodemon',
  'prettier',
  'stylelint',
  'webpack',
  'webpack-dev-server'
].reduce((a, b) => {
  a[b] = path.join(__dirname, b)
  return a
}, {})

module.exports = scripts
