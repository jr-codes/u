'use strict'

const helper = require('../utils/script-helper')

const name = 'prettier'

// https://prettier.io/docs/en/cli.html
const args = {
  default: {
    config: helper.getConfig(name),
    ignorePath: helper.getIgnore('.prettierignore'),
  },
}

// Add line break before prettier runs
console.log() // eslint-disable-line no-console

process.exitCode = helper.run(name, args)
