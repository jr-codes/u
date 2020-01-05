'use strict'

const mergeArgs = require('./merge-args')
const run = require('./run')

/**
 * Runs the specified executable with yargs options.
 *
 * @param {string} cmd Name of the executable to run
 * @param {Object} args Yargs options
 * @param {Object} initialOptions Options passed to execa
 * @returns {number} Resulting exit code from running executable
 */
function runYargs(cmd, args, initialOptions = {}) {
  return run(cmd, mergeArgs(process.argv.slice(2), args), initialOptions)
}

module.exports = runYargs
