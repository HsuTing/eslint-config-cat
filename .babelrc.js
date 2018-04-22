const alias = {};

module.exports = alias;
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-stage-0',
    '@babel/preset-flow',
  ],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      cwd: __dirname,
      alias,
    }],
  ],
};
