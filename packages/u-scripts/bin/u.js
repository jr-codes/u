#!/usr/bin/env node

'use strict'

const u = require('../index')

const command = process.argv.slice(2).join(' ')

process.exitCode = u(command)
