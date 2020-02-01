#!/usr/bin/env node

'use strict'

const u = require('..')

const arg = process.argv.slice(2).join(' ')

process.exitCode = u(arg)
