'use strict'

module.exports = {
  extends: [
    'limit-language-features',
    'possible-errors',
    'stylistic-issues',
  ].map(x => require.resolve(`./${x}`)),
}
