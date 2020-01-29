'use strict'

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

module.exports = (parts, options) =>
  parts.reduce(
    (partialConfig, part) => part(partialConfig, options) || partialConfig,
    initialConfig
  )
