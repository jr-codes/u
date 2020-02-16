'use strict'

const debug = require('debug')('u:utils')
const execa = require('execa')
const prefixStream = require('./prefix-stream')

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
async function run(cmd, args = [], options = {}) {
  debug('run:initial %s %o %o', cmd, args, options)

  const { label, ...execaOptions } = options
  let exitCode = 0

  if (label) {
    execaOptions.env = {
      DEBUG_COLORS: true,
      ...execaOptions.env,
    }
    execaOptions.stdio = ['inherit', 'pipe', 'pipe']
    args.push('--color')
  }

  /** @type {object} */
  const mergedOptions = { ...defaultOptions, ...execaOptions }

  debug('run:final %s %o %o', cmd, args, mergedOptions)

  const child = execa(cmd, args, mergedOptions)

  if (label) {
    child.stdout.pipe(prefixStream(label, child.pid)).pipe(process.stdout)
    child.stderr.pipe(prefixStream(label, child.pid)).pipe(process.stderr)
  }

  const result = await child
  exitCode = result.exitCode
  return exitCode
}

module.exports = run
