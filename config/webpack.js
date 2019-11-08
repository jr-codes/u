'use strict'

const addBase = require('./webpack-parts/base')
const addFonts = require('./webpack-parts/fonts')
const addHtml = require('./webpack-parts/html')
const addImages = require('./webpack-parts/images')
const addJavaScript = require('./webpack-parts/javascript')
const addStyles = require('./webpack-parts/styles')
const addText = require('./webpack-parts/text')
const buildWebpackConfig = require('../lib/utils/build-webpack-config')
const debug = require('debug')('u')
const { env, isDevelopment, isProduction } = require('../lib/utils/env')

debug('env %s', env)

const options = {
  env,
  isDevelopment,
  isProduction,
  measurePerformance: true,
  useSourceMap: true,
}

const parts = [
  addBase,
  addFonts,
  // SpeedMeasurePlugin conflicts with html-webpack-plugin,
  // so exclude this when speed testing
  !options.measurePerformance && addHtml,
  addImages,
  addJavaScript,
  addStyles,
  addText,
].filter(Boolean)

// https://webpack.js.org/configuration/
module.exports = buildWebpackConfig(parts, options)
