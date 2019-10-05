'use strict'

const env = require('../../utils/env')
const getConfigPath = require('../../utils/get-config-path')
const resolveProjectPath = require('../../utils/resolve-project-path')

const configFile = getConfigPath('babel')
const isDevelopment = env === 'development'

module.exports = [
  {
    include: resolveProjectPath('src'),
    test: /\.(mjs|js|jsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile,
          cacheDirectory: isDevelopment,
        },
      },
    ],
  },
]
