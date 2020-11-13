'use strict'

module.exports = (config, options) => {
  config.bail = true

  config.optimization.splitChunks = {
    automaticNameDelimiter: '-',
    chunks: 'all',
    name: false,
  }

  config.optimization.runtimeChunk = {
    name: (entrypoint) => `runtime-${entrypoint.name}`,
  }

  config.output.chunkFilename = options.isDevelopment
    ? '[name].chunk.js'
    : '[name].[contenthash:8].chunk.js'

  config.output.globalObject = 'this'

  return config
}
