'use strict'

const helper = require('../utils/script-helper')

const name = 'jest'

// https://jestjs.io/docs/en/cli
const defaultArgs = {
  alias: {
    config: 'c',
  },
  default: {
    config: helper.getConfig(name),
    passWithNoTests: true,
    silent: true,
  },
}

// Add line break before jest runs
console.log() // eslint-disable-line no-console

helper.run(name, defaultArgs)
