'use strict'

const pkgDir = require('pkg-dir')

// Find the user's project directory.
// Starts at cwd and finds the nearest dir with a package.json
module.exports = () => pkgDir.sync()
