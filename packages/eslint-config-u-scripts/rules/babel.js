'use strict'

// 📐 eslint-plugin-babel: https://github.com/babel/eslint-plugin-babel
module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    babelOptions: {
      presets: require.resolve('babel-preset-u-scripts'),
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
