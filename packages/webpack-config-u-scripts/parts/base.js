'use strict'

const utils = require('../utils')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (config, options) => ({
  ...config,
  context: utils.resolveUserPath(),
  devtool:
    options.useSourceMap &&
    (options.isProduction ? 'source-map' : 'cheap-module-source-map'),
  entry: options.paths.entry,
  mode: options.env,
  output: {
    filename: options.isDevelopment ? 'main.js' : '[name].[contenthash:8].js',
    path: options.paths.output,
  },
  plugins: [new CleanWebpackPlugin()],
})
