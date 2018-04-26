const correct  = {
  key: 'value',
  'need-quoted': 'value',
};

// $expectError quote-props
const unnecessarilyQuotedKey = {
  'key': 'value',
};
