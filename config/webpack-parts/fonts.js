'use strict'

module.exports = config => {
  config.module.rules.push({
    test: /\.(woff|woff2)$/,
    use: [require.resolve('file-loader')],
  })

  return config
}
