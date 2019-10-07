'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const debug = require('debug')('u')
const time = require('debug')('u:time')
const run = require('./run')

module.exports = (script, args = [], env = {}) => {
  debug('run-script %s', script, args)
  const scriptPath = require.resolve(`../scripts/${script}`)

  console.log(chalk`{bold RUN} {blue ${script}}`)

  time('start %s', script)
  const exitCode = run('node', [scriptPath, ...args], { env })
  time('end %s', script)

  // Add line break between scripts
  console.log()

  return exitCode
}
