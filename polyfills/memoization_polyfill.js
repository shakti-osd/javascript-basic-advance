const { memo } = require("react");

// polyfill for memoized function
function myMemoized(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 10000000; i++) {}
    return num1 * num2;
};

const memoizedClumzyProduct = myMemoized(clumsyProduct);
console.time("First Call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second Call");


// Fibonacci - Problem 1
const fibonacci = (n, memo = {}) => {
  if (n <= 1) return n;
  if (!memo[n]) {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  return memo[n];
};

console.log(fibonacci(6))



// factorial - problem - 2
const factorial = (n, memo = {}) => {
  if (n === 0 || n === 1) return 1;
  if (!memo[n]) {
    memo[n] = n * factorial(n - 1, memo);
  }
  return memo[n];
};

console.log(factorial(6))

