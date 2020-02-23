'use strict'

const helper = require('../utils/script-helper')

const defaultArgs = {
  default: {
    config: helper.getConfig('webpack'),
  },
}

// Add line break before webpack runs
console.log() // eslint-disable-line no-console

helper.run('webpack-dev-server', defaultArgs)
