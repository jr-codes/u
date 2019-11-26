'use strict'

const resolveProjectPath = require('../../lib/utils/resolve-project-path')

module.exports = config => {
  config.devServer = {
    contentBase: resolveProjectPath('dist'),
  }

  return config
}
