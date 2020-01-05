'use strict'

const { cosmiconfigSync } = require('cosmiconfig')

// Try to find the user's config.
// If one isn't found, return a default config.
module.exports = (name, options = {}) => {
  const explorer = cosmiconfigSync(name, options)
  const results = explorer.search()

  return results ? results.filepath : require.resolve(`../../config/${name}`)
}
