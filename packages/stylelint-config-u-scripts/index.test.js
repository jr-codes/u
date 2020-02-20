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
      code: 'a { color: #CC0099; }',
    })
    console.log(lint.output)
    expect(lint.errored).toEqual(false)
  })
})
