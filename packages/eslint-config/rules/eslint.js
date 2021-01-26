'use strict'

// 📐 eslint: https://eslint.org/docs/rules/
module.exports = {
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        // ESLint is producing false positives for this rule in TypeScript.
        // Let TypeScript users catch these errors with the TypeScript compiler instead.
        // Related: https://github.com/typescript-eslint/typescript-eslint/issues/342
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'no-var': 'error',
  },
}
