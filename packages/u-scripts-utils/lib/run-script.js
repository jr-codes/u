'use strict'

/* eslint-disable no-console, max-params */

const chalk = require('chalk')
const debug = require('debug')('u:utils')
const run = require('./run')
const time = require('debug')('u:time')

/**
 * Runs the script with the given name.
 *
 * @param {string} name Name of the script to path
 * @param {string} scriptPath Path of script file
 * @param {string[]} [args] Arguments array
 * @param {Object.<string,string>} [options] Options
 * @returns {number} Resulting exit code from running script
 */
function runScript(name, scriptPath, args = [], options = {}) {
  debug('run-script %s %s %o %o', name, scriptPath, args, options)

  if (scriptPath) {
    console.log(chalk`{bold RUN} {blue ${name}}`)

    time('start %s', name)
    const exitCode = run('node', [scriptPath, ...args], { env: options.env })
    time('end %s', name)

    // Add line break between scripts
    console.log()

    return exitCode
  }

  console.log(chalk`{red.bold ERROR} Invalid command {red ${name}}`)
  console.log()

  return 1
}

module.exports = runScript
