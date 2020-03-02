'use strict'

const debug = require('debug')('u:webpack')
const parts = require('./parts')
const utils = require('./utils')

// https://webpack.js.org/configuration/

/**
 *
 * @param {object} env options that can be passed into webpack-config-u-scripts with --env
 * @param {string|string[]} env.entry One or more entry point paths.
 * @param {boolean} env.nosource Specifies that source maps shouldn't be generated.
 * @param {string} env.output Output path.
 * @param {string} env.public Public path to serve output.
 * @param {boolean} env.perf Specifies whether performance measurement tools should be run.
 * @returns {Function} webpack config
 */
function config(env = {}) {
  // https://webpack.js.org/api/cli/#environment-options
  debug('env %O', env)

  const selectedParts = [
    parts.base,
    parts.stats,
    parts.assets,
    parts.devServer,
    parts.optimization,
    parts.fonts,

    // SpeedMeasurePlugin conflicts with html-webpack-plugin,
    // so exclude this when speed testing
    !env.perf && parts.html,

    parts.images,
    parts.javascript,
    parts.styles,
    parts.text,

    // Must go last to wrap overall config
    env.perf && parts.measurePerformance,
  ].filter(Boolean)

  const selectedOptions = {
    env: process.env.NODE_ENV,
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    paths: {
      entry: env.entry || './src/index.js',
      public: env.public || '/',
      output: env.output || utils.resolveUserPath('dist'),
    },
    useSourceMap: !env.nosource,
  }

  return utils.build(selectedParts, selectedOptions)
}

module.exports = config
