'use strict'

const path = require('path')
const utils = require('cli-rewire')

const helper = utils.createScriptHelper(path.join(__dirname, '../configs'))

module.exports = helper
