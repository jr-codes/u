'use strict'

const getConfig = require('../../lib/utils/get-config')

const config = getConfig('prettier')

// 📐 stylelint-prettier: https://github.com/prettier/stylelint-prettier
module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': [true, config],
  },
}
