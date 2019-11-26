'use strict'

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const initialConfig = {
  entry: [],
  module: {
    rules: [],
  },
  optimization: {
    minimizer: [],
  },
  output: {},
  plugins: [],
}

module.exports = (parts, options) => {
  const config = parts.reduce(
    (partialConfig, part) => part(partialConfig, options) || partialConfig,
    initialConfig
  )

  if (options.measurePerformance) {
    const smp = new SpeedMeasurePlugin()
    return smp.wrap(config)
  }

  return config
}
