'use strict'

const path = require('path')
const { getConfigPath, getIgnorePath, rewire } = require('cli-rewire')

const name = 'eslint'
const ignoreName = `.${name}ignore`
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)
const defaultIgnoreFile = path.join(__dirname, '../configs', ignoreName)

const run = rewire(name, {
  // https://eslint.org/docs/user-guide/command-line-interface
  alias: {
    config: 'c',
    format: 'f',
  },

  boolean: ['cache', 'no-eslintrc'],

  default: {
    cache: true,
    config: getConfigPath(
      name,
      { packageProp: 'eslintConfig' },
      defaultConfigFile
    ),
    ext: ['.js', '.jsx', '.json'],
    format: require.resolve('eslint-formatter-pretty'),
    'ignore-path': getIgnorePath(ignoreName, {}, defaultIgnoreFile),
    'no-eslintrc': true,
    'resolve-plugins-relative-to': __dirname,
  },
})

run()
