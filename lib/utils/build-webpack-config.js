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
  parts.reduce((config, part) => part(config, options), initialConfig)
