'use strict'

module.exports = (config, options) => {
  config.bail = true

  config.optimization.splitChunks = {
    automaticNameDelimiter: '-',
    chunks: 'all',
    name: false,
  }

  config.optimization.runtimeChunk = {
    name: entrypoint => `runtime-${entrypoint.name}`,
  }

  config.output.chunkFilename = options.isDevelopment
    ? '[name].chunk.js'
    : '[name].[contenthash:8].chunk.js'

  // TODO [webpack@>=5.0.0]: Not needed in webpack 5
  config.output.futureEmitAssets = true

  config.output.globalObject = 'this'

  return config
}
