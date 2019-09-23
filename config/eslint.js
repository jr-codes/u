'use strict'

const prettierConfig = require('./prettier')

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
  ],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  overrides: [
    {
      files: ['*.test.[jt]s?(x)', '*.spec.[jt]s?(x)'],
      env: {
        jest: true,
      }
    }
  ],
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    babelOptions: {
      configFile: require.resolve('./babel')
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react'
  ],
  rules: {
    // 📐 eslint-plugin-prettier: https://github.com/prettier/eslint-plugin-prettier
    // ---
    'prettier/prettier': ['error', prettierConfig],

    // 📐 eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react
    // ---
    // 'react/boolean-prop-naming': 'off',
    // 'react/button-has-type': 'off',
    // 'react/default-props-match-prop-types': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/display-name': 'off',
    // 'react/forbid-component-props': 'off',
    // 'react/forbid-dom-props': 'off',
    // 'react/forbid-elements': 'off',
    // 'react/forbid-foreign-prop-types': 'off',
    // 'react/forbid-prop-types': 'off',
    // 'react/jsx-boolean-value': 'off',
    // 'react/jsx-child-element-spacing': 'off',
    // 'react/jsx-closing-bracket-location': 'off',
    // 'react/jsx-closing-tag-location': 'off',
    // 'react/jsx-curly-spacing': 'off',
    // 'react/jsx-curly-newline': 'off',
    // 'react/jsx-equals-spacing': 'off',
    // 'react/jsx-filename-extension': 'off',
    // 'react/jsx-first-prop-new-line': 'off',
    // 'react/jsx-handler-names': 'off',
    // 'react/jsx-indent': 'off',
    // 'react/jsx-indent-props': 'off',
    // 'react/jsx-key': 'off',
    // 'react/jsx-max-depth': 'off',
    // 'react/jsx-max-props-per-line': 'off',
    // 'react/jsx-no-bind': 'off',
    // 'react/jsx-no-comment-textnodes': 'off',
    // 'react/jsx-no-duplicate-props': 'off',
    // 'react/jsx-no-literals': 'off',
    // 'react/jsx-no-target-blank': 'off',
    // 'react/jsx-no-useless-fragment': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    // 'react/jsx-no-undef': 'off',
    // 'react/jsx-curly-brace-presence': 'off',
    // 'react/jsx-pascal-case': 'off',
    // 'react/jsx-fragments': 'off',
    // 'react/jsx-props-no-multi-spaces': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-sort-default-props': 'off',
    // 'react/jsx-sort-props': 'off',
    // 'react/jsx-space-before-closing': 'off',
    // 'react/jsx-tag-spacing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 'react/jsx-wrap-multilines': 'off',
    // 'react/no-access-state-in-setstate': 'off',
    // 'react/no-array-index-key': 'off',
    // 'react/no-children-prop': 'off',
    // 'react/no-danger': 'off',
    // 'react/no-danger-with-children': 'off',
    // 'react/no-deprecated': 'off',
    // 'react/no-did-mount-set-state': 'off',
    // 'react/no-did-update-set-state': 'off',
    // 'react/no-direct-mutation-state': 'off',
    // 'react/no-find-dom-node': 'off',
    // 'react/no-is-mounted': 'off',
    // 'react/no-multi-comp': 'off',
    // 'react/no-set-state': 'off',
    // 'react/no-string-refs': 'off',
    // 'react/no-redundant-should-component-update': 'off',
    // 'react/no-render-return-value': 'off',
    // 'react/no-this-in-sfc': 'off',
    // 'react/no-typos': 'off',
    // 'react/no-unescaped-entities': 'off',
    // 'react/no-unknown-property': 'off',
    // 'react/no-unsafe': 'off',
    // 'react/no-unused-prop-types': 'off',
    // 'react/no-unused-state': 'off',
    // 'react/no-will-update-set-state': 'off',
    // 'react/prefer-es6-class': 'off',
    // 'react/prefer-read-only-props': 'off',
    // 'react/prefer-stateless-function': 'off',
    // 'react/prop-types': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/require-default-props': 'off',
    // 'react/require-optimization': 'off',
    // 'react/require-render-return': 'off',
    // 'react/self-closing-comp': 'off',
    // 'react/sort-comp': 'off',
    // 'react/sort-prop-types': 'off',
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    // 'react/style-prop-object': 'off',
    // 'react/void-dom-elements-no-children': 'off'
  }
}
