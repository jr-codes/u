const config = require('./config/jest')

module.exports = {
  ...config,
  collectCoverageFrom: ['**/*.js', '!coverage/**', '!dist/**', '!tests/**'],
}
