import * as swc from '@swc/core'
import preset from '.'
console.log(preset)

test('returns a config function', () => {
  expect(preset).toEqual(expect.any(Function))
})

test('function returns a config object (test)', () => {
  const mockApi = {
    env: (value) => value === 'test',
  }

  const config = preset(mockApi)

  expect(config).toEqual(
    expect.objectContaining({
      plugins: expect.any(Array),
      presets: expect.any(Array),
    })
  )
})

test('function returns a config object (not test)', () => {
  const mockApi = {
    env: (value) => value !== 'test',
  }

  const config = preset(mockApi)

  expect(config).toEqual(
    expect.objectContaining({
      plugins: expect.any(Array),
      presets: expect.any(Array),
    })
  )
})

test.each([
  'javascript.js',
  'react.js',
  'react.jsx',
  'react.tsx',
  'typescript.ts',
])('transforms %s', async (name) => {
  const filename = '__fixtures__/' + name
  const options = {
    presets: [preset],
  }
  console.log('===========================================')
  console.log(options)
  console.log('===========================================')

  const { code } = await swc.transform(filename, options)

  expect(code).toBeDefined()
})
