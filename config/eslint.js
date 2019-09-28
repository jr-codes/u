'use strict'
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint', 'import', 'jsx-a11y', 'react', 'prettier'].map(x =>
    require.resolve(`./eslint-rules/${x}`)
  ),
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  overrides: [
    {
      files: ['*.test.[jt]s?(x)', '*.spec.[jt]s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    babelOptions: {
      configFile: require.resolve('./babel'),
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
