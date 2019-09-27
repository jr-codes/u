'use strict'

// 📐 eslint-plugin-import: https://github.com/benmosher/eslint-plugin-import
module.exports = {
  plugins: ['import'],
  rules: {
    // 'import/default': 'off',
    // 'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'error',
    // 'import/extensions': 'off',
    'import/first': 'error',
    'import/group-exports': 'error',
    // 'import/max-dependencies': 'off',
    // 'import/named': 'off',
    // 'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    // 'import/no-anonymous-default-export': 'off',
    // 'import/no-commonjs': 'off',
    // 'import/no-cycle': 'off',
    // 'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    // 'import/no-duplicates': 'off',
    // 'import/no-dynamic-require': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    // 'import/no-named-as-default': 'off',
    // 'import/no-named-as-default-member': 'off',
    'import/no-named-default': 'error',
    // 'import/no-named-export': 'off',
    // 'import/no-namespace': 'off',
    // 'import/no-nodejs-modules': 'off',
    // 'import/no-relative-parent-imports': 'off',
    // 'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    // 'import/no-unassigned-import': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // 'import/order': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/unambiguous': 'off',
  },
}
