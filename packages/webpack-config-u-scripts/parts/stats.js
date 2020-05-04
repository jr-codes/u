'use strict'

// https://webpack.js.org/configuration/stats/
module.exports = (config) => {
  config.stats = {
    assetsSort: '!size',
    children: false,
    entrypoints: false,
    hash: false,
    modules: false,
    version: false,
  }
}
