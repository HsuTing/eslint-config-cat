// @flow

const ENV = process.env.NODE_ENV;
const alias = {};
const ignore = [];

if (ENV !== 'test') {
  ignore.push(
    '**/__tests__/**',
    '**/__testsFiles__/**',
  );
}

module.exports = alias;
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./src'],
      cwd: __dirname,
      alias,
    }],
    ['transform-imports', {
      fbjs: {
        transform: 'fbjs/lib/${member}',
      },
    }],
  ],
  ignore,
};
