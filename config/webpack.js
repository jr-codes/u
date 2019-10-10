'use strict'

const addBase = require('./webpack-parts/base')
const addJavaScript = require('./webpack-parts/javascript')
const addImages = require('./webpack-parts/images')
const addStyles = require('./webpack-parts/styles')
const buildWebpackConfig = require('../lib/utils/build-webpack-config')
const debug = require('debug')('u')
const { env, isDevelopment, isProduction } = require('../lib/utils/env')

debug('env %s', env)

const parts = [addBase, addJavaScript, addStyles, addImages]

const options = {
  env,
  isDevelopment,
  isProduction,
  useSourceMap: true,
}

// https://webpack.js.org/configuration/
module.exports = buildWebpackConfig(parts, options)
