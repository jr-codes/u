import runScript from './run-script'
import run from './run'

jest.mock('./run')

describe('run-script', () => {
  it('runs valid node scripts', () => {
    run.mockImplementation(() => 0)
    const script = 'webpack'

    const result = runScript(script)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.any(Array),
      expect.any(Object)
    )
  })

  it('runs valid node scripts with args and env', () => {
    run.mockImplementation(() => 0)
    const script = 'eslint'
    const args = ['.', '--fix']
    const env = { DEBUG: 'u', NODE_ENV: 'test' }

    const result = runScript(script, args, env)

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.arrayContaining(args),
      expect.objectContaining({ env })
    )
  })

  it('throws on invalid node scripts', () => {
    run.mockImplementation(() => 0)
    expect(() => runScript('foo')).toThrow()
  })

  it('fails when a script fails', () => {
    run.mockImplementation(() => 2)

    const result = runScript('prettier')

    expect(result).toBe(2)
  })
})
