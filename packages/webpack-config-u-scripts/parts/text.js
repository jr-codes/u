'use strict'

module.exports = (config) => {
  config.module.rules.push({
    test: /\.(md|txt)$/,
    use: [require.resolve('raw-loader')],
  })

  return config
}
