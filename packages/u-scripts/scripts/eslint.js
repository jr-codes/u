'use strict'

const helper = require('../utils/script-helper')

const name = 'eslint'

// https://eslint.org/docs/user-guide/command-line-interface
const defaultArgs = {
  alias: {
    config: 'c',
    format: 'f',
  },
  default: {
    cache: true,
    config: helper.getConfig(name, { packageProp: 'eslintConfig' }),
    ext: ['.js', '.jsx', '.json'],
    format: require.resolve('eslint-formatter-pretty'),
    ignorePath: helper.getIgnore('.eslintignore'),
    noEslintrc: true,
    resolvePluginsRelativeTo: __dirname,
  },
}

helper.run(name, defaultArgs)
