'use strict'

const debug = require('debug')('u:swc')

debug('SWC_ENV %s', process.env.SWC_ENV)
debug('NODE_ENV %s', process.env.NODE_ENV)

// https://swc.rs/docs/configuration/bundling
module.exports = {
  presets: ['@jr.codes/swc-preset'],
}
