'use strict'

const path = require('path')
const scripts = require('../scripts')
const utils = require('u-scripts-utils')

const defaultConfig = path.join(__dirname, '../config', 'u.js')
const config = utils.getConfig('u', {}, defaultConfig)

const runner = utils.createCommandRunner({
  commands: config.commands,
  scripts,
})

module.exports = runner
