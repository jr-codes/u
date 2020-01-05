'use strict'

const { cosmiconfigSync } = require('cosmiconfig')

// Try to find the user's config.
// If one isn't found, return a default config.
module.exports = (name, options = {}) => {
  const explorer = cosmiconfigSync(name, options)
  const results = explorer.search()

  // `name` does not come from user input
  // eslint-disable-next-line security/detect-non-literal-require
  return results ? results.config : require(`./packages/config`)
}
