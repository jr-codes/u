'use strict'

const helper = require('../lib/script-helper')

const name = 'webpack'

const defaultArgs = {
  default: {
    config: helper.getConfig(name),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

helper.run(name, defaultArgs)
