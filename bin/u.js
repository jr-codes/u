#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const getConfig = require('../utils/get-config')
const runCommand = require('../utils/run-command')
const runScript = require('../utils/run-script')
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
    .join(', ')
  console.log("  Couldn't run", chalk.bold(script))
  console.log('  Did you mean one of these?', options)
  exitCode = 1
}

process.exitCode = exitCode
