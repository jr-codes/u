'use strict'

module.exports = (api) => {
  const isTest = api.env('test')

  return {
    plugins: [
      // Add support for compile-time macros.
      require.resolve('babel-plugin-macros'),
    ],
    presets: [
      // Add support for new JavaScript syntax based on browserslist config.
      [require.resolve('@babel/preset-env'), {
        // If in a test environment (e.g., Jest), transpile to Node.
        // Otherwise, transpile to browsers.
        targets: isTest ? { node: 'current' } : {}
      }],

      // Add support for React and JSX.
      require.resolve('@babel/preset-react'),
    ],
  }
}
