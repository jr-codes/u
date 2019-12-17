'use strict'

module.exports = (config, options) => {
  config.devServer = {
    contentBase: options.paths.output,
    publicPath: options.paths.public,
  }

  return config
}
