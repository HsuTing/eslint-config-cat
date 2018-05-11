// @flow

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
      'babel-module': {},
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
