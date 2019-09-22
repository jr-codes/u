'use strict'

const babelJest = require('babel-jest')
const config = require('./babel')

module.exports = babelJest.createTransformer(config)
