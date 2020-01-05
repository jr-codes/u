'use strict'

const runScript = require('./run-script')
const run = require('./run')

jest.mock('./run')

/** @type {Object} */
const mockRun = run

describe('run-script', () => {
  it('runs script', () => {
    mockRun.mockImplementation(() => 0)
    const script = 'webpack'

    const result = runScript(script)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.any(Array),
      expect.any(Object)
    )
  })

  it("returns with script's exit code", () => {
    mockRun.mockImplementation(() => 2)

    const result = runScript('prettier')

    expect(run).toHaveBeenCalled()
    expect(result).toBe(2)
  })

  it('runs script with args', () => {
    mockRun.mockImplementation(() => 0)
    const script = 'eslint'
    const args = ['.', '--fix']

    const result = runScript(script, args)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.arrayContaining(args),
      expect.any(Object)
    )
  })

  it('runs script with env', () => {
    mockRun.mockImplementation(() => 0)
    const script = 'babel'
    const env = { BABEL_ENV: 'production' }

    const result = runScript(script, [], env)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.any(Array),
      expect.objectContaining({ env })
    )
  })

  it('runs script with args and env', () => {
    mockRun.mockImplementation(() => 0)
    const script = 'jest'
    const args = ['--ci']
    const env = { BABEL_ENV: 'test', NODE_ENV: 'test' }

    const result = runScript(script, args, env)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.arrayContaining(args),
      expect.objectContaining({ env })
    )
  })

  it("doesn't run invalid script", () => {
    mockRun.mockImplementation(() => 0)

    const result = runScript('foo')

    expect(run).not.toHaveBeenCalled()
    expect(result).toBe(1)
  })
})
