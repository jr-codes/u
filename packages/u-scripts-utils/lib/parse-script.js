'use strict'

const debug = require('debug')('u:utils')

/**
 * Parses a script command and returns an array of args
 * that can be passed to `runScript`.
 *
 * @param {string | Array} script Script command
 * @param {object} scripts Map of script names to script paths
 *
 * @example
 * parseScript('jest', { jest: 'path/to/jest' })
 * // Returns ['jest', 'path/to/jest', [], {}]
 *
 * @example
 * parseScript('eslint --fix .', { eslint: 'path/to/eslint' })
 * // Returns ['eslint', 'path/to/eslint', ['--fix', '.'], {}]
 *
 * @example
 * parseScript(['webpack', { env: { NODE_ENV: 'production' }}], { webpack: 'path/to/webpack' })
 * // Returns ['webpack', 'path/to/webpack', [], { env: { NODE_ENV: 'production' }}]
 */
function parseScript(script, scripts) {
  debug('parsing %s', script)

  // Examples:
  // 'jest' => [['jest'], {}]
  // 'eslint --fix .' => [['eslint', '--fix', '.'], {}]
  // ['webpack', { env: { NODE_ENV: 'production' }}] => [['webpack'], { env: { NODE_ENV: 'production' }}]
  // ['webpack'] => ['webpack', {}]
  const normalized =
    typeof script === 'string'
      ? [script.split(' '), {}]
      : [script[0].split(' '), script[1] || {}]

  const name = normalized[0][0]
  const scriptPath = scripts[name]
  const args = normalized[0].slice(1)
  const options = normalized[1]

  // [['jest'], {}] => ['jest', 'path/to/jest', [], {}]
  // [['eslint', '--fix', '.'], {}] => ['eslint', 'path/to/eslint', ['--fix', '.'], {}]
  // [['webpack'], { env: { NODE_ENV: 'production' }}] => ['webpack', 'path/to/webpack', [], { env: { NODE_ENV: 'production' }}]
  return [name, scriptPath, args, options]
}

module.exports = parseScript
