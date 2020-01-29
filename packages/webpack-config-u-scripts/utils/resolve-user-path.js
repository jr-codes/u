'use strict'

const path = require('path')

const root = process.cwd()

module.exports = (...paths) => path.join(root, ...paths)
