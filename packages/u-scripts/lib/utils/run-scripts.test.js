'use strict'

const runScripts = require('./run-scripts')
const runScript = require('./run-script')

jest.mock('./run-script')

/** @type {Object} */
const mockRunScript = runScript

describe('run-command', () => {
  it('runs valid scripts', () => {
    mockRunScript.mockImplementation(() => 0)
    const scripts = [
      'eslint .',
      'babel',
      'prettier --write "**/*.js"',
      'webpack',
      'jest --ci',
    ]

    const result = runScripts(scripts)

    expect(result).toBe(0)
    expect(mockRunScript).toHaveBeenCalledTimes(scripts.length)
    expect(mockRunScript).toHaveBeenLastCalledWith(
      'jest',
      expect.arrayContaining(['--ci']),
      expect.any(Object)
    )
  })

  it('stops when a script fails', () => {
    mockRunScript
      .mockImplementation(() => 0)
      .mockImplementationOnce(() => 0)
      .mockImplementationOnce(() => 1)

    const scripts = [
      'babel script.js',
      'jest',
      'prettier "src/**/*.js"',
      'webpack',
    ]

    const result = runScripts(scripts)

    expect(result).toBe(1)
    expect(mockRunScript).toHaveBeenCalledTimes(2)
  })

  it('fails when a script fails', () => {
    mockRunScript.mockImplementation(() => 1)
    const scripts = ['eslint', 'prettier']

    const result = runScripts(scripts)

    expect(result).toBe(1)
    expect(mockRunScript).toHaveBeenCalledTimes(1)
  })

  it('runs script with args and environment variables', () => {
    mockRunScript.mockImplementation(() => 0)
    const env = { DEBUG: 'u', NODE_ENV: 'production' }
    const scripts = ['eslint --fix .', ['webpack --json', { env }]]

    runScripts(scripts)

    expect(mockRunScript).toHaveBeenLastCalledWith(
      'webpack',
      expect.arrayContaining(['--json']),
      env
    )
  })
})
