'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

const getLoaders = options => {
  return [
    options.isDevelopment && require.resolve('style-loader'),
    options.isProduction && MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: {
        sourceMap: options.useSourceMap,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [postcssPresetEnv()],
        sourceMap: options.useSourceMap,
      },
    },
    options.useSass && {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: options.useSourceMap,
      },
    },
  ].filter(Boolean)
}

module.exports = (config, options) => {
  config.optimization.minimizer.push(
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: options.useSourceMap
          ? {
              inline: false,
              annotation: true,
            }
          : false,
      },
    })
  )

  config.module.rules.push({
    test: /\.css$/,
    use: getLoaders({ ...options, useSass: false }),
  })

  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: getLoaders({ ...options, useSass: true }),
  })

  if (options.isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        chunkFilename: '[name].[contenthash:8].chunk.css',
        filename: '[name].[contenthash:8].css',
        ignoreOrder: true,
      })
    )
  }

  return config
}
