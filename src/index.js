// @flow

import path from 'path';

import chalk from 'chalk';

type babelConfig = { alias?: {} };

const { alias = {} }: babelConfig = ((): babelConfig => {
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
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],

    indent: ['error', 2],

    'max-len': ['error', {
      code: 80,
    }],

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

    'valid-jsdoc': 'error',

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
  },
};
