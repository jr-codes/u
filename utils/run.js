'use strict'

const debug = require('debug')('u')
const execa = require('execa')

const defaultOpts = {
  buffer: false,
  localDir: __dirname,
  preferLocal: true,
  stdio: 'inherit',
}

module.exports = (cmd, args = [], opts = {}) => {
  let exitCode = 0

  debug('run %s %o', cmd, args)

  try {
    const result = execa.sync(cmd, args, { ...defaultOpts, ...opts })
    exitCode = result.exitCode
  } catch (error) {
    debug('%s threw an error', cmd)
    exitCode = 1
  }

  return exitCode
}
