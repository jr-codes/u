'use strict'

const env = process.env.NODE_ENV
const isDevelopment = env === 'development'
const isProduction = env === 'production'
const isTest = env === 'test'

module.exports = {
  env,
  isDevelopment,
  isProduction,
  isTest,
}
