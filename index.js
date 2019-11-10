'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const getConfig = require('./lib/utils/get-config')
const runScript = require('./lib/utils/run-script')
const runScripts = require('./lib/utils/run-scripts')
const scripts = require('./lib/scripts')

/** @type {{ commands: Array }} */
const config = getConfig('u')
const commands = config.commands || []

/**
 * Runs the given command and returns the resulting exit code.
 *
 * The command must match a command from u's config,
 * or it must match a supported script name with valid args.
 * Otherwise, an error exit code is returned.
 *
 * @param {string} command Command to run
 * @returns {number} Exit code
 *
 * @example
 * u('eslint --fix .')
 *
 * @example
 * u('build')
 */
function u(command) {
  if (command in commands) {
    return runScripts(commands[command])
  }

  const [script, ...args] = command.split(' ')

  if (script in scripts) {
    return runScript(script, args)
  }

  const options = [...Object.keys(scripts), ...Object.keys(commands)]
    .map(x => chalk.blue(x))
    .sort()
    .join(', ')

  console.log()
  console.log(chalk`{red ERROR} Couldn't find {red ${command}}`)
  console.log('Did you mean one of these?', options)
  console.log()

  return 1
}

module.exports = u
