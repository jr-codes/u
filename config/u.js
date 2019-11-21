'use strict'

module.exports = {
  commands: {
    build: [['webpack', { BABEL_ENV: 'production', NODE_ENV: 'production' }]],
    dev: [['webpack', { BABEL_ENV: 'development', NODE_ENV: 'development' }]],
    lint: [
      'eslint --fix .',
      'stylelint **/*.{css,js,jsx,scss} --fix',
      'prettier --write "**/*.{json,md,yaml,yml}"',
    ],
    test: [
      'eslint --fix .',
      'stylelint **/*.{css,js,jsx,scss} --fix',
      'prettier --write "**/*.{json,md,yaml,yml}"',
      'jest',
    ],
    'test ci': [
      'eslint .',
      'stylelint **/*.{css,js,jsx,scss}',
      'prettier --check "**/*.{json,md,yaml,yml}"',
      'jest --ci',
    ],
  },
}
