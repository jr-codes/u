'use strict'

const debug = require('debug')('u')
const execa = require('execa')

const defaultOptions = {
  buffer: false,
  localDir: __dirname,
  preferLocal: true,
  stdio: 'inherit',
}

/**
 * Runs the specified executable.
 *
 * @param {string} cmd Name of the executable to run
 * @param {string[]} args Arguments array
 * @param {Object} initialOptions Options passed to execa
 * @returns {number} Resulting exit code from running executable
 */
function run(cmd, args = [], initialOptions = {}) {
  let exitCode = 0

  /** @type {object} */
  const options = { ...defaultOptions, ...initialOptions }

  debug('run %s %o', cmd, args, options)

  try {
    const result = execa.sync(cmd, args, options)
    exitCode = result.exitCode
  } catch (error) {
    debug('%s threw an error', cmd)
    exitCode = 1
  }

  return exitCode
}

module.exports = run
