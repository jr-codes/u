'use strict'

const debug = require('debug')('u')
const time = require('debug')('u:time')
const run = require('./run')

module.exports = (script, args = [], env = {}) => {
  debug('run-script %s', script)
  const scriptPath = require.resolve(`../scripts/${script}`)

  time('start %s', script)
  const exitCode = run('node', [scriptPath, ...args], { env })
  time('end %s', script)

  // Add line break between scripts
  console.log()

  return exitCode
}
