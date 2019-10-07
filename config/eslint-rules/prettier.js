'use strict'

const getConfig = require('../../lib/utils/get-config')

const config = getConfig('prettier')

// 📐 eslint-plugin-prettier: https://github.com/prettier/eslint-plugin-prettier
module.exports = {
  extends: ['prettier', 'prettier/react', 'prettier/unicorn'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', config],
  },
}
