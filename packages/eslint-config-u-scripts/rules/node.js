'use strict'

// 📐 eslint-plugin-node: https://github.com/mysticatea/eslint-plugin-node
module.exports = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
}
