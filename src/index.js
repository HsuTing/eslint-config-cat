// @flow

import path from 'path';

import chalk from 'chalk';

type babelConfigType = { alias?: {} };

const { alias = {} } = ((): babelConfigType => {
  try {
    const babelPath: string = path.resolve(process.cwd(), './.babelrc');

    return require(babelPath);
  } catch (e) {
    /* eslint-disable no-console */
    console.log(chalk`{green [eslint-config-cat]} can not import \`.babelrc\``);
    console.log(chalk`{green [eslint-config-cat]} use \`alias = \{\}\``);
    /* eslint-enable no-console */

    return {};
  }
})();

export default {
  extends: [
    'eslint:recommended',
    './lib/babel/index.js',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:flowtype/recommended',
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
    'jsdoc',
  ],
  settings: {
    'import/resolver': {
      node: {},
      'babel-module': alias,
    },
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],

    indent: ['error', 2],

    'no-shadow': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-confusing-arrow': 'error',

    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
    }],
    'object-curly-spacing': ['error', 'always'],

    'quote-props': ['error', 'as-needed'],

    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true,
      },
    }],

    strict: ['error', 'never'],

    // eslint-plugin-jsdoc
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',

    // eslint-plugin-flowType
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-mutable-array': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': 'error',
    'flowtype/require-return-type': ['error', 'always'],
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'flowtype/require-variable-type': ['error', {
      excludeVariableTypes: {
        var: false,
        let: false,
        const: true,
      },
    }],
    'flowtype/type-id-match': ['error', '^([a-z][A-Za-z0-9]*)+Type$'],
  },
};
