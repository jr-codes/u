'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const getConfig = require('./lib/utils/get-config')
const runCommand = require('./lib/utils/run-command')
const runScript = require('./lib/utils/run-script')
const scripts = require('./config/scripts')

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
module.exports = command => {
  if (command in commands) {
    return runCommand(command, commands)
  }

  const [script, ...args] = command.split(' ')
  if (scripts.includes(script)) {
    return runScript(script, args)
  }

  const options = [...scripts, ...Object.keys(commands)]
    .map(x => chalk.blue(x))
    .sort()
    .join(', ')

  console.log()
  console.log(chalk`{red.bold ERROR} Couldn't run {red ${command}}`)
  console.log('Did you mean one of these?', options)
  console.log()

  return 1
}
