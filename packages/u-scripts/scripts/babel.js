'use strict'

const helper = require('../utils/script-helper')

const name = 'babel'

// https://babeljs.io/docs/en/babel-cli/
const defaultArgs = {
  default: {
    configFile: helper.getConfig(name),
    noBabelrc: true,
  },
}

helper.run(name, defaultArgs)
