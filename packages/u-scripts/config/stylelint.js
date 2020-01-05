'use strict'

// https://stylelint.io/user-guide/configuration
module.exports = {
  extends: [
    'stylelint',
    'prettier', // prettier must go last to disable styling rules
  ].map(x => require.resolve(`./stylelint-rules/${x}`)),
}
