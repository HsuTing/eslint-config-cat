// @flow

type correct = {
  a: string,
  b: string,
};

// $expectError flowtype/no-dupe-keys
type dupeKeys = {
  a: string,
  a: string,
};

// $expectError flowtype/no-mutable-array
type simpleArray = Array<string>;

// $expectError flowtype/no-primitive-constructor-types
type test = Number;
