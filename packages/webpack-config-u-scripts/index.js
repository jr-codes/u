'use strict'

const parts = require('./parts')
const utils = require('./utils')

const env = process.env.NODE_ENV
const isDevelopment = env === 'development'
const isProduction = env === 'production'

const defaultOptions = {
  env,
  isDevelopment,
  isProduction,
  measurePerformance: false,
  paths: {
    entry: ['./src/index.js'],
    public: '/',
    output: utils.resolveUserPath('dist'),
  },
  useSourceMap: true,
}

// https://webpack.js.org/configuration/
module.exports = options => {
  const selectedParts = [
    parts.base,
    parts.stats,
    parts.assets,
    parts.devServer,
    parts.optimization,
    parts.fonts,

    // SpeedMeasurePlugin conflicts with html-webpack-plugin,
    // so exclude this when speed testing
    !options.measurePerformance && parts.html,

    parts.images,
    parts.javascript,
    parts.styles,
    parts.text,

    // Must go last to wrap overall config
    options.measurePerformance && parts.measurePerformance,
  ].filter(Boolean)

  const selectedOptions = {
    ...defaultOptions,
    ...options,
  }

  return utils.build(selectedParts, selectedOptions)
}
