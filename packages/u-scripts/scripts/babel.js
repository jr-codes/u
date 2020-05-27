'use strict'

const helper = require('../lib/script-helper')

const name = 'babel'

// https://babeljs.io/docs/en/babel-cli/
const defaultArgs = {
  default: {
    configFile: helper.getConfig(name),
    noBabelrc: true,
  },
}

helper.run(name, defaultArgs)
