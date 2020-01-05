'use strict'

const execa = require('execa')
const run = require('./run')

jest.mock('execa')

const mockSync = jest.spyOn(execa, 'sync')

const buildReturnValue = props => ({
  command: null,
  exitCode: null,
  failed: null,
  killed: null,
  stdout: null,
  stderr: null,
  timedOut: null,
  ...props,
})

describe('run', () => {
  it('calls execa.sync', () => {
    mockSync.mockImplementation(() => buildReturnValue({ exitCode: 0 }))
    const cmd = 'echo'
    const args = ['test']
    const options = {
      env: {
        ENV: 123,
      },
    }

    const result = run(cmd, args, options)
    expect(result).toBe(0)
    expect(mockSync).toHaveBeenLastCalledWith(
      cmd,
      args,
      expect.objectContaining(options)
    )
  })

  it('returns failure exit code on execa failure', () => {
    mockSync.mockImplementation(() => {
      throw new Error('error')
    })
    const cmd = 'echo'
    const args = ['test']
    const options = {
      env: {
        ENV: 123,
      },
    }

    const result = run(cmd, args, options)
    expect(result).not.toBe(0)
    expect(mockSync).toHaveBeenLastCalledWith(
      cmd,
      args,
      expect.objectContaining(options)
    )
  })

  it('returns exit code from execa', () => {
    mockSync.mockImplementation(() => buildReturnValue({ exitCode: 42 }))
    const cmd = 'echo'
    const args = ['test']
    const options = {
      env: {
        ENV: 123,
      },
    }

    const result = run(cmd, args, options)
    expect(result).toBe(42)
    expect(mockSync).toHaveBeenLastCalledWith(
      cmd,
      args,
      expect.objectContaining(options)
    )
  })
})
