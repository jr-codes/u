'use strict'

const path = require('path')
const scriptMap = require('../scripts')
const utils = require('cli-rewire')

const defaultConfig = path.join(__dirname, '../config', 'u.js')
const config = utils.getConfig('u', {}, defaultConfig)

const runner = utils.createCommandRunner({
  commands: config.commands,
  scriptMap,
})

module.exports = runner
