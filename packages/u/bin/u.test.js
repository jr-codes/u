'use strict'

const execa = require('execa')
const cli = require.resolve('./u')
const run = (command) => execa.node(cli, command.split(' '))

// Run each tool's --help command to make sure
// that scripts are proxying tools correctly.
test.each([
  ['babel --help', 'Usage: babel [options] <files ...>'],
  ['eslint --help', 'eslint [options] file.js [file.js] [dir]'],
  ['jest --help', 'Usage: jest'],
  ['prettier --help', 'Usage: prettier [options] [file/dir/glob ...]'],
  ['swc --help', 'Usage: swc [options] <files ...>'],
])('%s', async (command, expected) => {
  const { stdout } = await run(command)
  expect(stdout).toEqual(expect.stringContaining(expected))
})
