'use strict'

module.exports = config => {
  config.module.rules.push({
    test: /\.svg$/,
    use: [require.resolve('@svgr/webpack')],
  })

  return config
}
