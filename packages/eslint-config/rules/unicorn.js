'use strict'

// 📐 eslint-plugin-unicorn: https://github.com/sindresorhus/eslint-plugin-unicorn
module.exports = {
  plugins: ['unicorn'],
  // unicorn is very opinionated, so instead of using recommended rules, add rules manually.
  rules: {
    // Improve regexes.
    'unicorn/better-regex': 'error',

    // Don't use properties if you've already destructured the variables.
    'unicorn/consistent-destructuring': 'error',

    // Move function definitions to the highest possible scope.
    'unicorn/consistent-function-scoping': 'error',

    // Enforce passing a message value when creating a built-in error.
    'unicorn/error-message': 'error',

    // Require escape sequences to use uppercase values.
    'unicorn/escape-case': 'error',

    // Add expiration conditions to TODO comments.
    'unicorn/expiring-todo-comments': 'error',

    // Enforce explicitly comparing the length property of a value.
    'unicorn/explicit-length-check': 'error',

    // Enforce a case style for filenames.
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],

    // Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.
    'unicorn/new-for-builtins': 'error',

    // Enforce specifying rules to disable in eslint-disable comments.
    'unicorn/no-abusive-eslint-disable': 'error',

    // Enforce combining multiple Array#push() into one call.
    'unicorn/no-array-push-push': 'error',

    // Do not use a for loop that can be replaced with a for-of loop.
    'unicorn/no-for-loop': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes.
    'unicorn/no-hex-escape': 'error',

    // Require Array.isArray() instead of instanceof Array.
    'unicorn/no-instanceof-array': 'error',

    // Disallow if statements as the only statement in if blocks without else.
    'unicorn/no-lonely-if': 'error',

    // Disallow nested ternary expressions.
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'error',

    // Disallow new Array().
    'unicorn/no-new-array': 'error',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
    'unicorn/no-new-buffer': 'error',

    // Disallow the use of objects as default parameters.
    'unicorn/no-object-as-default-parameter': 'error',

    // Disallow process.exit(), except in specific cases.
    'unicorn/no-process-exit': 'error',

    // Disallow assigning this to a variable.
    'unicorn/no-this-assignment': 'error',

    // Disallow unreadable array destructuring.
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Disallow unsafe regular expressions.
    'unicorn/no-unsafe-regex': 'error',

    // Disallow useless undefined.
    'unicorn/no-useless-undefined': 'error',

    // Disallow number literals with zero fractions or dangling dots.
    'unicorn/no-zero-fractions': 'error',

    // Enforce proper case for numeric literals.
    'unicorn/number-literal-case': 'error',

    // Prefer .addEventListener() and .removeEventListener() over on-functions.
    'unicorn/prefer-add-event-listener': 'error',

    // Prefer .find(…) over the first element from .filter(…).
    'unicorn/prefer-array-find': 'error',

    // Prefer Array#indexOf() over Array#findIndex() when looking for the index of an item.
    'unicorn/prefer-array-index-of': 'error',

    // Prefer .some(…) over .find(…).
    'unicorn/prefer-array-some': 'error',

    // Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
    'unicorn/prefer-date-now': 'error',

    // Prefer default parameters over reassignment.
    'unicorn/prefer-default-parameters': 'error',

    // Prefer Node#append() over Node#appendChild().
    'unicorn/prefer-dom-node-append': 'error',

    // Prefer using .dataset on DOM elements over .setAttribute(…).
    'unicorn/prefer-dom-node-dataset': 'error',

    // Prefer childNode.remove() over parentNode.removeChild(childNode).
    'unicorn/prefer-dom-node-remove': 'error',

    // Prefer .textContent over .innerText.
    'unicorn/prefer-dom-node-text-content': 'error',

    // Prefer .includes() over .indexOf() when checking for existence or non-existence.
    'unicorn/prefer-includes': 'error',

    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-keyboard-event-key': 'error',

    // Enforce the use of Math.trunc instead of bitwise operators.
    'unicorn/prefer-math-trunc': 'error',

    // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(),
    // prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
    'unicorn/prefer-modern-dom-apis': 'error',

    // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice().
    'unicorn/prefer-negative-index': 'error',

    // Prefer Number static properties over global ones.
    'unicorn/prefer-number-properties': 'error',

    // Prefer omitting the catch binding parameter.
    'unicorn/prefer-optional-catch-binding': 'error',

    // Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName().
    'unicorn/prefer-query-selector': 'error',

    // Prefer Reflect.apply() over Function#apply().
    'unicorn/prefer-reflect-apply': 'error',

    // Prefer RegExp#test() over String#match() and RegExp#exec().
    'unicorn/prefer-regexp-test': 'error',

    // Prefer Set#has() over Array#includes() when checking for existence or non-existence.
    'unicorn/prefer-set-has': 'error',

    // Prefer the spread operator over Array.from() and Array#concat().
    'unicorn/prefer-spread': 'error',

    // Prefer String#slice() over String#substr() and String#substring().
    'unicorn/prefer-string-slice': 'error',

    // Prefer String#startsWith() & String#endsWith() over RegExp#test().
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
    'unicorn/prefer-string-trim-start-end': 'error',

    // Prefer ternary expressions over simple if-else statements.
    'unicorn/prefer-ternary': 'error',

    // Enforce throwing TypeError in type checking conditions.
    'unicorn/prefer-type-error': 'error',

    // Require new when throwing an error.
    'unicorn/throw-new-error': 'error',
  },
}
