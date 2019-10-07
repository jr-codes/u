'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const debug = require('debug')('u')
const runScript = require('./run-script')
const scripts = require('../../config/scripts')

module.exports = (command, commands) => {
  debug('run-command %s', command)

  return commands[command]
    .map(x => (typeof x === 'string' ? [x, {}] : x))
    .map(x => [x[0].split(' '), x[1]])
    .every(step => {
      const [[script, ...args], env] = step

      if (!scripts.includes(script)) {
        const options = scripts.map(x => chalk.blue(x)).join(', ')
        console.log(chalk`{red.bold ERROR} Couldn't run {red ${script}} in command {red ${command}}`)
        console.log('Did you mean one of these?', options)
        console.log()
        return false
      }

      const exitCode = runScript(script, args, env)

      if (exitCode !== 0) {
        debug('%s stopped because of %s error', command, script)
      }

      return exitCode === 0
    }) ? 0 : 1 // prettier-ignore
}
