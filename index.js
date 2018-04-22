'use strict';

const path = require('path');

const {alias} = require(
  path.resolve(process.cwd(), './.babelrc')
);

module.exports = {
  extends: [
    'eslint:recommended',
    'fbjs/strict',
    'google',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  plugins: [
    'import',
    'flowtype',
  ],
  settings: {
    'import/resolver': {
      'babel-module': alias,
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
  },
};
