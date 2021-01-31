'use strict'

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint',
    'import',
    'jest',
    'json',
    'node',
    'promise',
    'react',
    'react-hooks',
    'unicorn',
    'babel', // babel's parsing options should take precedence
    'prettier', // prettier must go last to disable styling rules
  ].map((x) => require.resolve(`./rules/${x}`)),
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  root: true,
}
