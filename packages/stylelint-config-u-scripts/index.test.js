'use strict'

const config = require('.')
const stylelint = require('stylelint')

describe('index', () => {
  it('returns an object', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('runs', async () => {
    const lint = await stylelint.lint({
      config,
      code: 'a { color: #CC0099; }'
    })
    expect(lint.errored).toEqual(true)
    expect(lint.output.includes('color-hex-case')).toEqual(true)
    expect(lint.output.includes('no-missing-end-of-source-newline')).toEqual(true)
  })
})
