'use strict'

const getConfigPath = require('../utils/get-config-path')
const runYargs = require('../utils/run-yargs')

const name = 'eslint'

// https://eslint.org/docs/user-guide/command-line-interface
const args = {
  alias: {
    config: 'c',
    format: 'f',
  },
  default: {
    cache: true,
    config: getConfigPath(name, { packageProp: 'eslintConfig' }),
    ext: ['.js', '.jsx', '.json'],
    format: require.resolve('eslint-formatter-pretty'),
    ignorePath: require.resolve('../../config/.eslintignore'),
    noEslintrc: true,
    resolvePluginsRelativeTo: __dirname,
  },
}

process.exitCode = runYargs(name, args)
