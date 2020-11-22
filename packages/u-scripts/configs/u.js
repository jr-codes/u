'use strict'

module.exports = {
  commands: {
    lint: [
      'eslint --fix .',
      'prettier --write .',
    ],
    test: [
      'eslint --fix .',
      'prettier --write .',
      'jest',
    ],
    'test-ci': [
      'eslint .',
      'prettier --check .',
      'jest --ci',
    ],
  },
}
