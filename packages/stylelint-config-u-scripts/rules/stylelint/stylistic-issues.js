'use strict'

module.exports = {
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: 'after-same-name',
        ignore: 'after-comment',
      },
    ], // disabled by stylelint-config-prettier
    'at-rule-name-case': 'lower', // disabled by stylelint-config-prettier
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'at-rule-semicolon-newline-after': 'always', // disabled by stylelint-config-prettier
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never', // disabled by stylelint-config-prettier
    'block-closing-brace-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'block-closing-brace-newline-before': 'always-multi-line', // disabled by stylelint-config-prettier
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line', // disabled by stylelint-config-prettier
    'block-opening-brace-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'block-opening-brace-space-before': 'always', // disabled by stylelint-config-prettier
    'color-hex-case': 'lower', // disabled by stylelint-config-prettier
    'color-hex-length': 'long',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'declaration-block-semicolon-newline-before': 'never-multi-line', // disabled by stylelint-config-prettier
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': 'never', // disabled by stylelint-config-prettier
    'declaration-block-trailing-semicolon': 'always', // disabled by stylelint-config-prettier
    'declaration-colon-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'declaration-colon-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'declaration-colon-space-before': 'never', // disabled by stylelint-config-prettier
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': null,
    'function-comma-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'function-comma-newline-before': null,
    'function-comma-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'function-comma-space-before': 'never', // disabled by stylelint-config-prettier
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line', // disabled by stylelint-config-prettier
    'function-parentheses-space-inside': 'never', // disabled by stylelint-config-prettier
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    indentation: 2, // disabled by stylelint-config-prettier
    'length-zero-no-unit': true,
    linebreaks: 'unix', // disabled by stylelint-config-prettier
    'max-empty-lines': 2, // disabled by stylelint-config-prettier
    'max-line-length': 100, // disabled by stylelint-config-prettier
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower', // disabled by stylelint-config-prettier
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always', // disabled by stylelint-config-prettier
    'media-query-list-comma-newline-before': 'never-multi-line', // disabled by stylelint-config-prettier
    'media-query-list-comma-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'media-query-list-comma-space-before': 'never', // disabled by stylelint-config-prettier
    'no-empty-first-line': true, // disabled by stylelint-config-prettier
    'no-eol-whitespace': true, // disabled by stylelint-config-prettier
    'no-missing-end-of-source-newline': true, // disabled by stylelint-config-prettier
    'number-leading-zero': 'always', // disabled by stylelint-config-prettier
    'number-no-trailing-zeros': true, // disabled by stylelint-config-prettier
    'property-case': 'lower', // disabled by stylelint-config-prettier
    'rule-empty-line-before': 'never', // disabled by stylelint-config-prettier
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always', // disabled by stylelint-config-prettier
    'selector-combinator-space-before': 'always', // disabled by stylelint-config-prettier
    'selector-descendant-combinator-no-non-space': true, // disabled by stylelint-config-prettier
    'selector-list-comma-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'selector-list-comma-newline-before': 'never-multi-line', // disabled by stylelint-config-prettier
    'selector-list-comma-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'selector-list-comma-space-before': 'never', // disabled by stylelint-config-prettier
    'selector-pseudo-class-case': 'lower', // disabled by stylelint-config-prettier
    'selector-pseudo-class-parentheses-space-inside': 'always', // disabled by stylelint-config-prettier
    'selector-pseudo-element-case': 'lower', // disabled by stylelint-config-prettier
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'string-quotes': 'single', // disabled by stylelint-config-prettier
    'unicode-bom': 'never', // disabled by stylelint-config-prettier
    'unit-case': 'lower', // disabled by stylelint-config-prettier
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line', // disabled by stylelint-config-prettier
    'value-list-comma-newline-before': 'never-multi-line', // disabled by stylelint-config-prettier
    'value-list-comma-space-after': 'always-single-line', // disabled by stylelint-config-prettier
    'value-list-comma-space-before': 'never', // disabled by stylelint-config-prettier
    'value-list-max-empty-lines': 0, // disabled by stylelint-config-prettier
  },
}
