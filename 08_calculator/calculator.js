const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;

  for (const num of array) {
    sum += num;
  }

  return sum;
};

const multiply = function(array) {
  let product = 1;

  for (const num of array) {
    product *= num;
  }

  return product;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
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
