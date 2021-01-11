'use strict'

const config = require('.')
const { ESLint } = require('eslint')

describe('index', () => {
  it('returns an object', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('runs', async () => {
    const eslint = new ESLint({
      baseConfig: config,
      useEslintrc: false,
    })

    const results = await eslint.lintText('var foo = bar')
    const result = results[0]
    const rules = result.messages.map((x) => x.ruleId)

    expect(results).toHaveLength(1)
    expect(result.errorCount).toBeGreaterThan(0)
    expect(rules).toEqual(
      expect.arrayContaining(['no-var', 'no-unused-vars', 'no-undef'])
    )
  })
})
