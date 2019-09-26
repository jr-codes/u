'use strict'

const findConfig = require('../../utils/find-config')
const { config } = findConfig('prettier')

// 📐 eslint-plugin-prettier: https://github.com/prettier/eslint-plugin-prettier
module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', config],
  },
}
