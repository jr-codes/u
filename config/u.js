'use strict'

module.exports = {
  commands: {
    build: [['webpack', { BABEL_ENV: 'production', NODE_ENV: 'production' }]],
    dev: [['webpack', { BABEL_ENV: 'development', NODE_ENV: 'development' }]],
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
