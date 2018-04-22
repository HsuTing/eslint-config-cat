import path from 'path';

import chalk from 'chalk';

type babelConfig = {
  alias?: {}
};

const {
  alias = {},
}: babelConfig = (():babelConfig => {
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
  },
  rules: {
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    strict: ['error', 'never'],
  },
};
