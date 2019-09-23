'use strict'

const getProjectDir = require('../utils/get-project-dir')

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './file-stub.js'
    ),
    '\\.(css|less|scss)$': require.resolve('identity-obj-proxy'),
  },
  rootDir: getProjectDir(),
  setupFilesAfterEnv: [require.resolve('./jest-setup.js')],
  transform: {
    '^.+\\.[t|j]sx?$': require.resolve('./babel-jest-transform.js'),
  },
}
