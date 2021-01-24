'use strict'

// 📐 eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        // ESLint is producing false positives for this rule in TypeScript.
        // Let TypeScript users catch these errors with the TypeScript compiler instead.
        // Related: https://github.com/typescript-eslint/typescript-eslint/issues/342
        'no-undef': 'off',

        // Let TypeScript users validate typing with tsc instead.
        'react/prop-types': 'off',
      },
    },
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
