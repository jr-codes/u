'use strict'

module.exports = {
	extends: [
    'stylelint',
    'order',
  ].map(x => require.resolve(`./rules/${x}`))
}
