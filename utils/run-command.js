'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const debug = require('debug')('u')
const runScript = require('./run-script')
const scripts = require('../config/scripts')

module.exports = (command, commands) => {
  debug('run-command %s', command)

  return commands[command].every(step => {
    const [script, ...args] = step.split(' ')

    if (!scripts.includes(script)) {
      const options = scripts.map(x => chalk.blue(x)).join(', ')
      console.log(chalk`  Couldn't run {bold ${script}} in {bold ${command}}`)
      console.log('  Did you mean one of these?', options)
      return false
    }

    const exitCode = runScript(script, args)

    if (exitCode !== 0) {
      debug('%s stopped because of %s error', command, script)
    }

    return exitCode === 0
  }) ? 0 : -1 // prettier-ignore
}
