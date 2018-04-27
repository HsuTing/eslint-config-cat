/**
 * @example
 * correct();
 *
 * @param {any} argu - any
 * @returns {'value'} - value
*/
const correct = argu => 'value';

/**
 * @example
 * correctNotDirectReturn();
 *
 * @param {any} argu - any
 * @returns {'test'} - value
*/
const correctNotDirectReturn = argu => {
  const a = 'test';

  return a;
};

// $expectError arrow-body-style
/**
 * @example
 * shouldDirectReturn();
 *
 * @param {any} argu - any
 * @returns {'value'} - value
*/
const shouldDirectReturn = argu => {
  return 'value';
};

// $expectError arrow-parens
/**
 * @example
 * notParens();
 *
 * @param {any} argu - any
 * @returns {'value'} - value
*/
const notParens = (argu) => 'value';