'use strict'

const TerserPlugin = require('terser-webpack-plugin')

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
          presets: [require.resolve('babel-preset-u-scripts')],
          cacheDirectory: options.isDevelopment,
        },
      },
    ],
  })

  return config
}
