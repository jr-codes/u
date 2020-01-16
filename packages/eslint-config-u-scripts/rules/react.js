'use strict'

// 📐 eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  plugins: ['react'],
  rules: {
    // 'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    // 'react/destructuring-assignment': 'off',
    // 'react/display-name': 'off',
    // 'react/forbid-component-props': 'off',
    // 'react/forbid-dom-props': 'off',
    // 'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    // 'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'error',
    // 'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-closing-tag-location': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-curly-spacing': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-equals-spacing': 'error', // ✘ disabled by eslint-config-prettier
    // 'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2], // ✘ disabled by eslint-config-prettier
    'react/jsx-indent-props': ['error', 2], // ✘ disabled by eslint-config-prettier
    'react/jsx-key': 'error',
    'react/jsx-max-depth': ['warn', { max: 8 }],
    // 'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    // 'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    // 'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // ✘ disabled by eslint-config-prettier
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 'error', // ✘ disabled by eslint-config-prettier
    // 'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error', // ✘ disabled by eslint-config-prettier
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error', // ✘ disabled by eslint-config-prettier
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    // 'react/no-is-mounted': 'off',
    // 'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    // 'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'warn',
    // 'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    // 'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'warn',
    // 'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'error',
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
