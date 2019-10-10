'use strict'

const cosmiconfig = require('cosmiconfig')

// Try to find the user's config.
// If one isn't found, return a default config.
module.exports = (name, options = {}) => {
  const explorer = cosmiconfig(name, options)
  const results = explorer.searchSync()

  // `name` does not come from user input
  // eslint-disable-next-line security/detect-non-literal-require
  return results ? results.config : require(`../../config/${name}`)
}
