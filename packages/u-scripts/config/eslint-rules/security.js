'use strict'

// 📐 eslint-plugin-security: https://github.com/nodesecurity/eslint-plugin-security
module.exports = {
  plugins: ['security'],
  rules: {
    'security/detect-buffer-noassert': 'warn',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-eval-with-expression': 'warn',
    // 'security/detect-new-buffer': 'off',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    // 'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
    // 'security/detect-unsafe-regex': 'off',
  },
}
