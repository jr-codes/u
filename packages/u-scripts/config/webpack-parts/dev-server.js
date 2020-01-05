'use strict'

module.exports = (config, options) => {
  config.devServer = {
    contentBase: options.paths.output,
    overlay: true,
    publicPath: options.paths.public,
    stats: 'minimal',
    watchContentBase: true,
  }

  return config
}
