'use strict'

module.exports = (api) => {
  const isProd = api.env('production')
  const isTest = api.env('test')

  return {
    plugins: [
      require.resolve('babel-plugin-macros'),
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      isProd && [
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        { removeImport: true },
      ],
      isTest && require.resolve('babel-plugin-dynamic-import-node'),
    ].filter(Boolean),
    presets: [
      isTest && [
        require.resolve('@babel/preset-env'),
        { targets: { node: 'current' } },
      ],
      !isTest && require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react'),
    ].filter(Boolean),
  }
}
