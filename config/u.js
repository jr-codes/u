'use strict'

module.exports = {
  commands: {
    build: [],
    lint: [
      'eslint --fix .',
      'prettier --write "**/*.{css,json,md,scss,yaml,yml}"',
    ],
    test: [
      'eslint --fix .',
      'prettier --write "**/*.{css,json,md,scss,yaml,yml}"',
      'jest',
    ],
    'test ci': [
      'eslint .',
      'prettier --check "**/*.{css,json,md,scss,yaml,yml}"',
      'jest --ci',
    ],
  },
}
