import runScript from './run-script'
import run from './run'

jest.mock('./run')

describe('run-script', () => {
  it('runs valid node scripts', () => {
    run.mockImplementation(() => 0)

    const result = runScript('webpack')

    expect(result).toBe(0)
    expect(run).toHaveBeenCalledWith(
      'node',
      expect.any(Array),
      expect.any(Object)
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
