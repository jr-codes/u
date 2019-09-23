#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const runScript = require('../utils/run-script')
const scripts = require('../config/scripts')

const [, , script, ...args] = process.argv
let exitCode = 0

if (scripts.includes(script)) {
  exitCode = runScript(script, args)
} else {
  console.log("  Couldn't run", chalk.bold(script))
  console.log('  Did you mean one of these?', scripts.map(x => chalk.blue(x)).join(', '))
  exitCode = -1
}

process.exitCode = exitCode
