'use strict'

// https://babeljs.io/docs/en/configuration#babelrcjs
module.exports = {
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
  ],
}
