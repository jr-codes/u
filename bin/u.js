#!/usr/bin/env node

'use strict'

/* eslint-disable no-console */

const chalk = require('chalk')
const findConfig = require('../utils/find-config')
const runCommand = require('../utils/run-command')
const runScript = require('../utils/run-script')
const scripts = require('../config/scripts')

const [, , script, ...args] = process.argv
const { config } = findConfig('u')
const command = [script, ...args].join(' ')
const commands = config.commands || []

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
  exitCode = -1
}

process.exitCode = exitCode
