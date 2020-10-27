#!/usr/bin/env node

'use strict'

const path = require('path')
const { getConfig, wire } = require('cli-rewire')

const resolve = (...paths) => path.join(__dirname, ...paths)

const scripts = [
  'babel',
  'eslint',
  'jest',
  'nodemon',
  'prettier',
  'stylelint',
  'webpack-dev-server',
  'webpack',
].map((script) => resolve('../scripts', script))

const defaultConfig = resolve('../configs/u.js')
const config = getConfig('u', {}, defaultConfig)

const u = wire(scripts, config)

u()
