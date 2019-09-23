'use strict'

const debug = require('debug')('u')
const time = require('debug')('u:time')
const run = require('./run')

module.exports = (script, args = []) => {
  debug('run-script %s', script)
  const scriptPath = require.resolve(`../scripts/${script}`)

  time('start %s', script)
  const exitCode = run('node', [scriptPath, ...args])
  time('end %s', script)

  return exitCode
}
