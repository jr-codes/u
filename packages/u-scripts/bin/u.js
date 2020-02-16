#!/usr/bin/env node

'use strict'

const u = require('..')

const arg = process.argv.slice(2).join(' ')

u(arg)
  .then(exitCode => (process.exitCode = exitCode))
  .catch(() => (process.exitCode = 1))
