'use strict'

// 📐 eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
