'use strict'

const findConfig = require('./find-config')

module.exports = (name, options) => findConfig(name, options).config
