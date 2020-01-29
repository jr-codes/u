'use strict'

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

module.exports = config => {
  const smp = new SpeedMeasurePlugin({
    outputFormat: 'humanVerbose',
  })
  return smp.wrap(config)
}
