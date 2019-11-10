#!/usr/bin/env node

'use strict'

const u = require('..')

const command = process.argv.slice(2).join(' ')

process.exitCode = u(command)
