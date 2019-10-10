'use strict'

const getConfigPath = require('../../lib/utils/get-config-path')
const TerserPlugin = require('terser-webpack-plugin')

const configFile = getConfigPath('babel')

module.exports = (config, options) => {
  config.optimization.minimizer.push(new TerserPlugin())

  config.module.rules.push({
    exclude: /node_modules/,
    test: /\.(js|jsx|mjs)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile,
          cacheDirectory: options.isDevelopment,
        },
      },
    ],
  })

  return config
}
