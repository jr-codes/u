'use strict'

const resolveProjectPath = require('../lib/utils/resolve-project-path')

const rootDir = resolveProjectPath('.')

// https://jestjs.io/docs/en/configuration
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './file-stub.js'
    ),
    '\\.(css|less|scss)$': require.resolve('identity-obj-proxy'),
  },
  restoreMocks: true,
  rootDir,
  setupFilesAfterEnv: [require.resolve('./jest-setup.js')],
  transform: {
    '^.+\\.[t|j]sx?$': require.resolve('./babel-jest-transform.js'),
  },
  verbose: true,
}
