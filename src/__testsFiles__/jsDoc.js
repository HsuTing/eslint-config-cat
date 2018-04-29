// @flow

/**
 * @example
 * correctFunction('test');
 *
 * @param {any} argu - example argu
 * @return {10} - example return
*/
const correctFunction = argu => 10;

// $expectError jsdoc/require-example
/**
 * @param {any} argu - example argu
 * @return {10} - example return
*/
const noExample = argu => 10;

// $expectError jsdoc/require-param
// $expectError valid-jsdoc
/**
 * @example
 * correctFunction('test');
 *
 * @return {10} - example return
*/
const noParams = argu => 10;

// $expectError valid-jsdoc
/**
 * @example
 * correctFunction('test');
 *
 * @param {any} argu - example argu
*/
const noReturns = argu => 10;

// $expectError require-jsdoc
const functionDeclarationRequiredJsDoc = () => 10;

// $expectError require-jsdoc
class classDeclarationRequiredJsDoc {
  // $expectError require-jsdoc
  methodDefinitionRequiredJsdoc() {
    return 10;
  }
}

const testObj = {
  // $expectError require-jsdoc
  methodDefinitionRequiredJsdoc() {
    return 10;
  },
};
