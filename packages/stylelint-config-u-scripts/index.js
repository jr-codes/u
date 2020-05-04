'use strict'

module.exports = {
  extends: ['stylelint', 'order', 'prettier'].map((x) =>
    require.resolve(`./rules/${x}`)
  ),
}
