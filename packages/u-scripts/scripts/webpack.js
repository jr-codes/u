'use strict'

const helper = require('../utils/script-helper')

const name = 'webpack'

const args = {
  default: {
    config: helper.getConfig(name),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

helper.run(name, args)
