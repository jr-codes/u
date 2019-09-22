'use strict'

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'

const run = require('../utils/run')

process.exitCode = run('jest', process.argv.slice(2))
