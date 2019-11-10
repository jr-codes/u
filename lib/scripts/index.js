'use strict'

const scripts = ['babel', 'eslint', 'jest', 'prettier', 'webpack'].reduce(
  (a, b) => {
    a[b] = require.resolve(`./${b}`)
    return a
  },
  {}
)

module.exports = scripts
