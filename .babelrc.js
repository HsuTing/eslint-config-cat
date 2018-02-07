'use strict';

const alias = {};

module.exports = alias;
module.exports = {
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      cwd: __dirname,
      alias
    }]
  ]
};
