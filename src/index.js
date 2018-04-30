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
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,

    // eslint-plugin-flowType
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-mutable-array': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-unused-expressions': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/require-return-type': [2, 'always'],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/require-variable-type': [2, {
      excludeVariableTypes: {
        var: false,
        let: false,
        const: true,
      },
    }],
    'flowtype/type-id-match': [2, '^([a-z][A-Za-z0-9]*)+Type$'],
  },
};
