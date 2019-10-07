#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const getConfig = require('../lib/utils/get-config')
const runCommand = require('../lib/utils/run-command')
const runScript = require('../lib/utils/run-script')
const scripts = require('../config/scripts')

const config = getConfig('u')
const commands = config.commands || []
const command = process.argv.slice(2)
const [script, ...args] = command

let exitCode = 0

if (scripts.includes(script)) {
  exitCode = runScript(script, args)
} else if (command in commands) {
  exitCode = runCommand(command, commands)
} else {
  const options = [...scripts, ...Object.keys(commands)]
    .map(x => chalk.blue(x))
    .sort()
    .join(', ')

  console.log()
  console.log(chalk`{red.bold ERROR} Couldn't run {red ${script}}`)
  console.log('Did you mean one of these?', options)
  console.log()

  exitCode = 1
}

process.exitCode = exitCode
