'use strict'

const chalk = require('chalk')
const EOL = require('os').EOL
const split = require('split2')

const colors = ['magenta', 'yellow', 'cyan', 'green', 'red', 'blue']

/**
 * Returns a transform stream that adds prefixes to each line of a stream.
 *
 * @param {string} prefix
 * @param {number} index
 * @param {string} separator
 */
function prefixStream(prefix, index = 0, separator = ' ') {
  const color = chalk[colors[index % colors.length]]
  return split(line => color(prefix) + separator + line + EOL)
}

module.exports = prefixStream
