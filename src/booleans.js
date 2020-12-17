const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } return false;
};

const truthiness = a => {
  if (!a) {
    return false;
  } return true;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return (a % 2 !== 0);
};

const isEven = a => {
  return (a % 2 == 0)
};

const isSquare = a => {
  return (Math.sqrt(a) % 1 == 0);
};

const startsWith = (char, string) => {
  return (char === string[0]);
};

const containsVowels = string => {
  if (string.search(/[aeiouAEIOU]/) == true) {
    return true;
  } return false;
};

const isLowerCase = string => {
  if (string.search(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/) == false) {
    return false;
  } return true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
