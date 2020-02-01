'use strict'

const helper = require('../utils/script-helper')

const args = {
  default: {
    config: helper.getConfig('webpack'),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

process.exitCode = helper.run('webpack-dev-server', args)
