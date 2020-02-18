#!/usr/bin/env node

'use strict'

const debug = require('debug')('u')
const u = require('..')

const arg = process.argv.slice(2).join(' ')

u(arg)
  .then(exitCode => (process.exitCode = exitCode))
  .catch(error => {
    debug(error)
    process.exitCode = 1
  })
