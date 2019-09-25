'use strict'
const cosmiconfig = require('cosmiconfig')

const getDefaultConfig = name => ({
  config: require(`../config/${name}`),
  filepath: require.resolve(`../config/${name}`),
  isEmpty: false,
})

// Try to find the user's config.
// If one isn't found, return a default config.
module.exports = (name, options = {}) => {
  const explorer = cosmiconfig(name, options)
  const results = explorer.searchSync()
  return results || getDefaultConfig(name)
}
