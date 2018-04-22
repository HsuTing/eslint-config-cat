'use strict';

const path = require('path');

const {alias} = require(
  path.resolve(process.cwd(), './.babelrc')
);

module.exports = {
  extends: [
    'eslint:recommended',
    'fbjs/strict',
    'google'
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true
  },
  plugins: [
    'import',
    'flowtype'
  ],
  settings: {
    'import/resolver': {
      'babel-module': alias
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    indent: ['error', 2],
    'max-len': 0,
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': [1, 'never'],
    'keyword-spacing': [2, {overrides: {
      if: {after: false},
      for: {after: false},
      while: {after: false},
      switch: {after: false},
      catch: {after: false}
    }}],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    curly: ['error', 'multi-or-nest'],
    'no-invalid-this': 'off',
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true
      }
    }]
  }
};
