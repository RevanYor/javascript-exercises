const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let result = array.reduce((sum, total) => sum + total, 0);
  return result;
};

const multiply = function(array) {
  let multed = array.reduce((mul, item) => mul * item);
  return multed;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
  let start = num;
  let total = [];
  for (let i = 0; i < num; i++) {
    let done = start - 1;
    start--
    total.push(done);
  }
  total.pop();
  let doe = total.reduce((facto, item) => facto * item, num);
  if( num === 0) {
    return 1;
  } else {
    return doe;
  }
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
