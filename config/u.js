'use strict'

module.exports = {
  commands: {
    build: [],
    lint: [
      'prettier --write "**/*.{css,json,md,scss,yaml,yml}"',
      'eslint . --fix',
    ],
    test: [
      'prettier --write "**/*.{css,json,md,scss,yaml,yml}"',
      'eslint . --fix',
      'jest',
    ],
    'test ci': [
      'prettier --check "**/*.{css,json,md,scss,yaml,yml}"',
      'eslint .',
      'jest --ci',
    ],
  },
}
