'use strict';

module.exports = {
  rules: {
    'max-len': 0,
    'quote-props': ['error', 'as-needed'],
    'no-alert': 'off',
    'no-console': 'off',
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
    curly: ['error', 'multi-or-nest']
  }
};
