'use strict'

const helper = require('../lib/script-helper')

const name = 'stylelint'

// https://stylelint.io/user-guide/cli
const defaultArgs = {
  alias: {
    ignorePath: 'i',
  },
  default: {
    cache: true,
    config: helper.getConfig(name),
    customFormatter: require.resolve('stylelint-formatter-pretty'),
    ignorePath: helper.getIgnore('.stylelintignore'),
  },
}

helper.run(name, defaultArgs)
