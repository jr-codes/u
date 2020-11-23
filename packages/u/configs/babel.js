'use strict'

const debug = require('debug')('u:babel')

debug('BABEL_ENV %s', process.env.BABEL_ENV)
debug('NODE_ENV %s', process.env.NODE_ENV)

// https://babeljs.io/docs/en/configuration#babelrcjs
module.exports = {
  presets: ['@jr.codes/babel-preset'],
}
