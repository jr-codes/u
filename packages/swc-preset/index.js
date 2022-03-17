"use strict";

module.exports = {
  jsc: {
    parser: {
      syntax: "typescript",
      jsx: true,
      dynamicImport: false,
      privateMethod: false,
      functionBind: false,
      exportDefaultFrom: false,
      exportNamespaceFrom: false,
      decorators: false,
      decoratorsBeforeExport: false,
      topLevelAwait: false,
      importMeta: false,
      preserveAllComments: false,
    },
    transform: {
      react: {},
    },
    target: "es5",
    loose: false,
    externalHelpers: false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    keepClassNames: false,
  },
};
