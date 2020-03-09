#!/usr/bin/env node

'use strict'

const argv = require('yargs').argv
const path = require('path')
const writePackage = require('write-pkg')

const dir = argv._[0] || ''
const name = path.basename(dir || process.cwd())

async function main() {
  const packagePath = path.join(dir, 'package.json')
  await writePackage(packagePath, {
    name,
    version: '1.0.0',
    scripts: {
      build: 'u build',
      dev: 'u dev',
      test: 'u test',
    },
    devDependencies: {
      'u-scripts': '*',
    },
  })
}

main()
