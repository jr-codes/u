'use strict'

const helper = require('../utils/script-helper')

const name = 'stylelint'

// https://stylelint.io/user-guide/cli
const args = {
  default: {
    cache: true,
    config: helper.getConfig(name),
    customFormatter: require.resolve('stylelint-formatter-pretty'),
    ignorePath: helper.getIgnore('.stylelintignore'),
  },
}

process.exitCode = helper.run(name, args)
