'use strict'

const helper = require('../utils/script-helper')

const name = 'babel'

// https://babeljs.io/docs/en/babel-cli/
const args = {
  default: {
    configFile: helper.getConfig(name),
    noBabelrc: true,
  },
}

process.exitCode = helper.run(name, args)
