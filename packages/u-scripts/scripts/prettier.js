'use strict'

const helper = require('../lib/script-helper')

const name = 'prettier'

// https://prettier.io/docs/en/cli.html
const defaultArgs = {
  default: {
    config: helper.getConfig(name),
    ignorePath: helper.getIgnore('.prettierignore'),
  },
}

// Add line break before prettier runs
console.log() // eslint-disable-line no-console

helper.run(name, defaultArgs)
