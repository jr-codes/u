'use strict'

const config = require('webpack-config-u-scripts')
const debug = require('debug')('u:webpack')

debug('NODE_ENV %s', process.env.NODE_ENV)

const options = {}

// https://webpack.js.org/configuration/
module.exports = config(options)
