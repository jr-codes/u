'use strict'

const runScript = require('./run-script')

/**
 * Runs the given list of scripts in sequential order.
 *
 * @param {Array<(string|Array)>} scripts List of scripts to run
 * @returns {number} Resulting exit code from running scripts
 *
 * @example
 * runScripts([
 *  'eslint --fix .',
 *  ['webpack', { BABEL_ENV: 'production', NODE_ENV: 'production' }]
 * ])
 */
function runScripts(scripts) {
  return scripts
    .map(script => (typeof script === 'string' ? [script, {}] : script))
    .map(script => [script[0].split(' '), script[1]])
    .every(script => {
      const [[name, ...args], env] = script
      return runScript(name, args, env) === 0
    })
    ? 0
    : 1
}

module.exports = runScripts
