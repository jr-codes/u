'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const debug = require('debug')('u:utils')
const parseScript = require('./parse-script')
const runScript = require('./run-script')

/**
 * Returns a runner utility used for running commands.
 *
 * @param {object} options
 * @param {Object.<string,string>} options.scripts Map of script names to file paths.
 * @param {Object.<string,Array>} options.commands Map of command names to an array of script commands.
 */
function createCommandRunner({ scripts = {}, commands = {} }) {
  /**
   * Runs the given argument and returns the resulting exit code.
   *
   * The argument must match a command from u's config,
   * or it must match a supported script name.
   * Otherwise, an error exit code is returned.
   *
   * @param {string} arg Argument to run
   * @returns {number} Exit code
   *
   * @example
   * u('eslint --fix .')
   *
   * @example
   * u('build')
   */
  async function u(arg) {
    debug('scripts %o', scripts)
    debug('commands %j', commands)

    const queue = []

    // Check if first word matches a script name
    const argHead = arg.split(' ')[0]

    // If arg is a script, add script to the queue
    // Else if arg is a command, add command's scripts to the queue
    // Else if neither, exit with an error code
    if (argHead in scripts) {
      queue.push(arg)
    } else if (arg in commands) {
      queue.push(...commands[arg])
    } else {
      console.log()
      console.log(chalk`{red ERROR} Invalid command {red ${arg}}`)
      console.log()
      return 1
    }

    for (const script of queue) {
      const args = parseScript(script, scripts)
      const exitCode = await runScript(...args) // eslint-disable-line no-await-in-loop
      if (exitCode) return 1
    }

    return 0
  }

  return u
}

module.exports = createCommandRunner
