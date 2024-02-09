const add = function (a, b) {
  return a + b

};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++)
    result += arr[i]
  return result
};

const multiply = function (arr) {
  let result = 1
  for (let i = 0; i < arr.length; i++)
    result *= arr[i]
  return result
};

const power = function (a, x) {
  return Math.power(a, x)
};

const factorial = function (a) {
  let result = 1
  for (let i = 1; i <= a; i++)
    result *= i
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
