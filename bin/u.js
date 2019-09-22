#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const runScript = require('../utils/run-script')

const [, , script, ...args] = process.argv
const scripts = ['jest']
let exitCode = 0

if (scripts.includes(script)) {
  exitCode = runScript(script, args)
} else {
  console.log(`  Couldn't run ${chalk.bold(script)}`)
  exitCode = -1
}

console.log()
process.exitCode = exitCode
