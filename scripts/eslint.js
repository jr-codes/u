'use strict'

const getArgs = require('../utils/get-args')
const findConfig = require('../utils/find-config')
const run = require('../utils/run')

const name = 'eslint'
const config = findConfig(name, { packageProp: 'eslintConfig' }).filepath
const args = getArgs({
  alias: {
    config: 'c',
    format: 'f',
  },
  default: {
    cache: true,
    config,
    ext: ['.js', '.jsx', '.json'],
    format: require.resolve('eslint-formatter-pretty'),
    ignorePath: require.resolve('../config/.eslintignore'),
    noEslintrc: true,
    resolvePluginsRelativeTo: __dirname,
  },
})

process.exitCode = run(name, args)
