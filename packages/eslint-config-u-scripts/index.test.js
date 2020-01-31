'use strict'

const config = require('.')
const eslint = require('eslint')

describe('index', () => {
  it('returns an object', () => {
    expect(config).toEqual(expect.any(Object))
  })

  it('runs', () => {
    const cli = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: 'index.js',
    })

    const result = cli.executeOnText('var foo = bar')
    const rules = result.results[0].messages.map(x => x.ruleId)

    expect(result.errorCount).toBeGreaterThan(0)
    expect(result.results).toHaveLength(1)
    expect(rules).toEqual(
      expect.arrayContaining(['no-var', 'no-unused-vars', 'no-undef'])
    )
  })
})
