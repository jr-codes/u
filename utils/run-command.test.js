import runCommand from './run-command'
import runScript from './run-script'

jest.mock('./run-script')

describe('run-command', () => {
  it('runs valid scripts', () => {
    runScript.mockImplementation(() => 0)
    const commands = {
      all: [
        'eslint .',
        'babel',
        'jest --ci',
        'prettier --write "**/*.js"',
        'webpack'
      ]
    }

    const result = runCommand('all', commands)

    expect(result).toBe(0)
    expect(runScript).toHaveBeenCalledTimes(commands.all.length)
  })

  it('fails on an invalid script', () => {
    runScript.mockImplementation(() => 0)
    const commands = {
      invalid: [
        'babel script.js',
        'jest',
        'node',
        'prettier "src/**/*.js"',
        'webpack'
      ]
    }

    const result = runCommand('invalid', commands)

    expect(result).toBe(1)
    expect(runScript).toHaveBeenCalledTimes(2)
  })

  it('fails when a script fails', () => {
    runScript.mockImplementation(() => 1)
    const commands = {
      lint: [
        'eslint',
        'prettier'
      ]
    }

    const result = runCommand('lint', commands)

    expect(result).toBe(1)
    expect(runScript).toHaveBeenCalledTimes(1)
  })

  it('handles passing environment variables', () => {
    runScript.mockImplementation(() => 0)
    const env = { DEBUG: 'u', NODE_ENV: 'production' }
    const commands = {
      build: [
        'eslint --fix .',
        ['webpack', env]
      ]
    }

    const result = runCommand('build', commands)

    expect(runScript.mock.calls[1][2]).toEqual(env)
  })
})
