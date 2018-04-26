/**
 * @example
 * correctFunction('test');
 *
 * @param {any} argu - example argu
 * @returns {10} - example returns
*/
const correctFunction = argu => {
  return 10;
};

// $expectError jsdoc/require-example
/**
 * @param {any} argu - example argu
 * @returns {10} - example returns
*/
const noExample = argu => {
  return 10;
};

// $expectError jsdoc/require-param
// $expectError valid-jsdoc
/**
 * @example
 * correctFunction('test');
 *
 * @returns {10} - example returns
*/
const noParams = argu => {
  return 10;
};

// $expectError valid-jsdoc
/**
 * @example
 * correctFunction('test');
 *
 * @param {any} argu - example argu
*/
const noReturns = argu => {
  return 10;
};
