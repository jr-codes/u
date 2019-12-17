'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const debug = require('debug')('u:run')
const run = require('./run')
const scripts = require('../scripts')
const time = require('debug')('u:time')

/**
 * Runs the script with the given name.
 *
 * @param {string} script Name of the script to run
 * @param {string[]} [args] Arguments array
 * @param {Object<string,string>} [env] Environment variables
 * @returns {number} Resulting exit code from running script
 */
function runScript(script, args = [], env = {}) {
  debug('run-script %s', script, args, env)

  if (script in scripts) {
    console.log(chalk`{bold RUN} {blue ${script}}`)

    time('start %s', script)
    const exitCode = run('node', [scripts[script], ...args], { env })
    time('end %s', script)

    // Add line break between scripts
    console.log()

    return exitCode
  }

  const options = Object.keys(scripts)
    .map(x => chalk.blue(x))
    .join(', ')

  console.log(chalk`{red.bold ERROR} Couldn't find {red ${script}}`)
  console.log('Did you mean one of these?', options)
  console.log()

  return 1
}

module.exports = runScript
