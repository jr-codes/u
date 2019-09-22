'use strict'

const parse = require('yargs-parser')
const unparse = require('yargs-unparser')

module.exports = options => {
  const args = parse(process.argv.slice(2), options)
  return unparse(args, { alias: options.alias })
}
