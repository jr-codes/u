'use strict'

const addAssets = require('./webpack-parts/assets')
const addBase = require('./webpack-parts/base')
const addDevServer = require('./webpack-parts/dev-server')
const addFonts = require('./webpack-parts/fonts')
const addHtml = require('./webpack-parts/html')
const addImages = require('./webpack-parts/images')
const addJavaScript = require('./webpack-parts/javascript')
const addOptimization = require('./webpack-parts/optimization')
const addStats = require('./webpack-parts/stats')
const addStyles = require('./webpack-parts/styles')
const addText = require('./webpack-parts/text')
const buildWebpackConfig = require('../lib/utils/build-webpack-config')
const debug = require('debug')('u:webpack')
const resolveProjectPath = require('../lib/utils/resolve-project-path')
const { env, isDevelopment, isProduction } = require('../lib/utils/env')

debug('env %s', env)

const options = {
  env,
  isDevelopment,
  isProduction,
  measurePerformance: false,
  paths: {
    entry: ['./src/index.js'],
    public: '/',
    output: resolveProjectPath('dist'),
  },
  useSourceMap: true,
}

const parts = [
  addBase,
  addStats,
  addAssets,
  addDevServer,
  addOptimization,
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
