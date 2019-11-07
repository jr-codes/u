'use strict'

const getArgs = require('../utils/get-args')
const getConfigPath = require('../utils/get-config-path')
const run = require('../utils/run')

const name = 'eslint'

// https://eslint.org/docs/user-guide/command-line-interface
const args = getArgs({
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
})

process.exitCode = run(name, args)
