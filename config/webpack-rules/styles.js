'use strict'

module.exports = [
  {
    test: /\.(scss|sass)$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      require.resolve('sass-loader'),
    ],
  },
  {
    test: /\.css$/,
    use: [require.resolve('style-loader'), require.resolve('css-loader')],
  },
]
