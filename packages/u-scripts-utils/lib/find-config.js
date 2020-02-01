'use strict'

const debug = require('debug')('u:utils')
const { cosmiconfigSync } = require('cosmiconfig')

/**
 * Cosmiconfig result object.
 *
 * @typedef {Object<string, any>} Result
 * @property {string | undefined} config The name of the person.
 * @property {string} filePath The age of the person.
 * @property {boolean} isEmpty The age of the person.
 */

/**
 * Searches for the given config file using cosmiconfig and returns the result.
 *
 * @param {string} name Name of the config to find
 * @param {Object} options Options passed to cosmiconfig
 * @param {string} defaultConfigPath Default config path to use if config isn't found.
 * @returns {Result | null} Cosmiconfig result
 *
 * @example
 * findConfig('babel')
 *
 * @example
 * findConfig('eslint', { packageProps: 'eslintConfig' })
 *
 * @example
 * findConfig('webpack', {}, '../default-webpack.config.js')
 */
function findConfig(name, options = {}, defaultConfigPath = '') {
  const explorer = cosmiconfigSync(name, options)
  const result = explorer.search()

  // If a config isn't found, load the default config instead
  if (result === null && defaultConfigPath) {
    debug('using default %s config %s', name, defaultConfigPath)
    return explorer.load(defaultConfigPath)
  }

  return result
}

module.exports = findConfig
