'use strict'

const debug = require('debug')('u:babel')
const { env } = require('../lib/utils/env')

debug('env %s', env)

// https://babeljs.io/docs/en/configuration#babelrcjs
module.exports = {
  presets: ['u-scripts'],
}
