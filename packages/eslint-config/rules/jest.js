'use strict'

const pkg = require('../package.json')
// Get Jest version
const jestVersion = pkg.devDependencies.jest.match(/\d+/g)[0]

// 📐 eslint-plugin-jest: https://github.com/jest-community/eslint-plugin-jest
module.exports = {
  extends: ['plugin:jest/recommended'],
  overrides: [
    {
      files: ['*.test.[jt]s?(x)', '*.spec.[jt]s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['jest'],
  settings: {
    jest: {
      version: jestVersion,
    },
  },
}
