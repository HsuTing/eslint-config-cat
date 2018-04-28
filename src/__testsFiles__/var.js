const a = 'value';

// $expectError no-shadow
/**
 * @example
 * test()
 *
 * @returns {nulli} - no return
*/
const test = () => {
  const a = 'test';
}
