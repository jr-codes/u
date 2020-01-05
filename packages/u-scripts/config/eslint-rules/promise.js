'use strict'

// 📐 eslint-plugin-promise: https://github.com/xjamundx/eslint-plugin-promise
module.exports = {
  plugins: ['promise'],
  rules: {
    // 'promise/always-return': 'off',
    // 'promise/avoid-new': 'off',
    'promise/catch-or-return': 'warn',
    // 'promise/no-callback-in-promise': 'off',
    // 'promise/no-native': 'off',
    // 'promise/no-nesting': 'off',
    'promise/no-new-statics': 'error',
    // 'promise/no-promise-in-callback': 'off',
    // 'promise/no-return-in-finally': 'off',
    // 'promise/no-return-wrap': 'off',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'promise/valid-params': 'error',
  },
}
