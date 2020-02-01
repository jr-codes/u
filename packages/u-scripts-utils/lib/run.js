'use strict'

const debug = require('debug')('u:utils')
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
 * @param {string[]} [args] Arguments array
 * @param {object} [options] Options passed to execa
 * @returns {number} Resulting exit code from running executable
 */
function run(cmd, args = [], options = {}) {
  let exitCode = 0

  /** @type {object} */
  const mergedOptions = { ...defaultOptions, ...options }

  debug('run %s %o %o', cmd, args, mergedOptions)

  try {
    const result = execa.sync(cmd, args, mergedOptions)
    exitCode = result.exitCode
  } catch (error) {
    debug('%s threw an error', cmd)
    exitCode = 1
  }

  return exitCode
}

module.exports = run
