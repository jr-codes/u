'use strict'

// 📐 eslint-plugin-unicorn: https://github.com/sindresorhus/eslint-plugin-unicorn
module.exports = {
  extends: ['plugin:unicorn/recommended'],
  plugins: ['unicorn'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}
