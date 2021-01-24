'use strict'

const os = require('os')
const path = require('path')
const { getConfigPath, getIgnorePath, rewire } = require('cli-rewire')

const name = 'eslint'
const ignoreName = `.${name}ignore`
const defaultConfigFile = path.join(__dirname, '../configs', `${name}.js`)
const defaultIgnoreFile = path.join(__dirname, '../configs', ignoreName)

const run = rewire(name, {
  // Specify which default options have aliases.
  alias: {
    config: 'c',
    format: 'f',
  },

  // Specify which default options are booleans.
  boolean: ['cache', 'no-eslintrc'],

  // https://eslint.org/docs/user-guide/command-line-interface
  default: {
    // Cache runs and lint only on changed files.
    cache: true,

    // Specify where to put cache files.
    'cache-location': path.join(os.homedir() || os.tmpdir(), '.u-eslintcache/'),

    // Get the user's ESLint config.
    // If not found, use default config.
    config: getConfigPath(
      name,
      { packageProp: 'eslintConfig' },
      defaultConfigFile
    ),

    // Run ESLint on these file extensions.
    ext: ['.js', '.jsx', '.json', '.ts', '.tsx'],

    // Output ESLint results in pretty format.
    format: require.resolve('eslint-formatter-pretty'),

    // Get the user's .eslintignore.
    // If not found, use default .eslintignore.
    'ignore-path': getIgnorePath(ignoreName, {}, defaultIgnoreFile),

    // Prevent ESLint from automatically loading the user's config.
    // since we're passing it explicitly with the config option.
    'no-eslintrc': true,

    // Load ESLint plugins relative to this package
    // so the user doesn't have to install these ESLint plugins themselves.
    'resolve-plugins-relative-to': path.join(__dirname, '../'),
  },
})

run()
