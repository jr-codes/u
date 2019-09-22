'use strict'

const debug = require('debug')('u')
const run = require('./run')

module.exports = (script, args = []) => {
  debug('run-script %s', script)
  const scriptPath = require.resolve(`../scripts/${script}`)
  return run('node', [scriptPath, ...args])
}
