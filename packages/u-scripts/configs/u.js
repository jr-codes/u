'use strict'

module.exports = {
  commands: {
    build: [['webpack', { env: { NODE_ENV: 'production' } }]],
    dev: [['webpack-dev-server --open', { env: { NODE_ENV: 'development' } }]],
    lint: [
      'eslint --fix .',
      'stylelint **/*.{css,js,jsx,scss} --fix',
      'prettier --write .',
    ],
    test: [
      'eslint --fix .',
      'stylelint **/*.{css,js,jsx,scss} --fix',
      'prettier --write .',
      'jest',
    ],
    'test-ci': [
      'eslint .',
      'stylelint **/*.{css,js,jsx,scss}',
      'prettier --check .',
      'jest --ci',
    ],
  },
}
