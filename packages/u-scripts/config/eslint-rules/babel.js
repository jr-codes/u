'use strict'

// 📐 eslint-plugin-babel: https://github.com/babel/eslint-plugin-babel
module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    babelOptions: {
      configFile: require.resolve('./babel'),
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['babel'],
  rules: {
    // 'babel/new-cap': 'off',
    // 'babel/camelcase': 'off',
    // 'babel/no-invalid-this': 'off',
    // 'babel/object-curly-spacing': 'off',
    // 'babel/quotes': 'off',
    // 'babel/semi': 'off',
    // 'babel/no-unused-expressions': 'off',
    // 'babel/valid-typeof': 'off',
  },
}
