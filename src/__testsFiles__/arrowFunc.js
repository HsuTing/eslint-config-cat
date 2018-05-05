// @flow

/**
 * @example
 * correct();
 *
 * @param {string} argu - any
 * @return {'value'} - value
*/
const correct = (argu): string => 'value';

/**
 * @example
 * correctNotDirectReturn();
 *
 * @param {string} argu - any
 * @return {'test'} - value
*/
const correctNotDirectReturn = (argu): string => {
  const a = 'test';

  return a;
};

// $expectError arrow-body-style
/**
 * @example
 * shouldDirectReturn();
 *
 * @param {string} argu - any
 * @return {'value'} - value
*/
const shouldDirectReturn = (argu): string => {
  return 'value';
};

// $expectError no-confusing-arrow
/**
 * @example
 * noConfusingArrow();
 *
 * @return {'true' | 'false'} - value
*/
const noConfusingArrow = (): string => true ? 'true' : 'false';
