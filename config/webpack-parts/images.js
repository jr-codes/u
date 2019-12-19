'use strict'

module.exports = config => {
  config.module.rules.push({
    test: /\.(gif|jpeg|jpg|png|svg)$/,
    use: [
      {
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[contenthash:8].[ext]',
        },
      },
    ],
  })

  return config
}
