'use strict'

const prettierConfig = require('../prettier')

// 📐 eslint-plugin-prettier: https://github.com/prettier/eslint-plugin-prettier
module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
