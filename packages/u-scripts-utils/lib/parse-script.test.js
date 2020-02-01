'use strict'

const parseScript = require('./parse-script')

describe('parse-script', () => {
  it.each([
    ['jest', { jest: 'path/to/jest' }, ['jest', 'path/to/jest', [], {}]],
    [
      'eslint --fix .',
      { eslint: 'path/to/eslint' },
      ['eslint', 'path/to/eslint', ['--fix', '.'], {}],
    ],
    [
      ['webpack'],
      { webpack: 'path/to/webpack' },
      ['webpack', 'path/to/webpack', [], {}],
    ],
    [
      ['webpack', { env: { NODE_ENV: 'production' } }],
      { webpack: 'path/to/webpack' },
      ['webpack', 'path/to/webpack', [], { env: { NODE_ENV: 'production' } }],
    ],
    [
      ['webpack-dev-server --open', { env: { NODE_ENV: 'development' } }],
      { 'webpack-dev-server': 'path/to/webpack-dev-server' },
      [
        'webpack-dev-server',
        'path/to/webpack-dev-server',
        ['--open'],
        { env: { NODE_ENV: 'development' } },
      ],
    ],
  ])('parses %j', (script, scripts, expected) => {
    const result = parseScript(script, scripts)
    expect(result).toEqual(expected)
  })
})
