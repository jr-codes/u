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
