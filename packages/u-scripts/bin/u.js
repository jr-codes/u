#!/usr/bin/env node

'use strict'

const u = require('..')

async function init() {
  try {
    const arg = process.argv.slice(2).join(' ')
    process.exitCode = await u(arg)
  } catch(error) {
    process.exitCode = 1
  }
}

init()
