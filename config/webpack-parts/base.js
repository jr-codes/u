'use strict'

const resolveProjectPath = require('../../lib/utils/resolve-project-path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (config, options) => ({
  ...config,
  bail: true,
  context: resolveProjectPath(),
  devtool:
    options.useSourceMap &&
    (options.isProduction ? 'source-map' : 'cheap-module-source-map'),
  entry: ['./src/index.js'],
  mode: options.env,
  optimization: {
    minimizer: [],
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      name: false,
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
  output: {
    chunkFilename: options.isDevelopment
      ? '[name].chunk.js'
      : '[name].[contenthash:8].chunk.js',
    filename: options.isDevelopment ? 'main.js' : '[name].[contenthash:8].js',
    futureEmitAssets: true, // TODO [webpack@>=5.0.0]: Not needed in webpack 5
    globalObject: 'this',
    path: resolveProjectPath('dist'),
  },
  plugins: [new CleanWebpackPlugin()],
})
