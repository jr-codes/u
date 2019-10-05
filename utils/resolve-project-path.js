'use strict'

const path = require('path')
const pkgDir = require('pkg-dir')

// Find the user's project directory.
// Starts at cwd and finds the nearest dir with a package.json
const root = pkgDir.sync()

module.exports = (...paths) => path.join(root, ...paths)
