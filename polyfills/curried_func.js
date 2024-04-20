//curry implementation
function curry(func) {
  // This function will be returned and will be responsible for accumulating arguments until all are provided.
  return function curriedFunc(...args) {
    //This means that all the expected arguments have been provided to the curried function.
    if (args.length >= func.length) {
      return func(...args);
    } else {
      // if not, we return a function that collects the next arguments passed in next and
      // we recursively call curriedFunc, accumulating and spreading the values of args first and then
      // the values of next. next will take into consideration a variable amount of next arguments
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sumFunc = (a, b, c, d, e) => a + b + c + d + e;

const totalSum = curry(sumFunc);

console.log(totalSum(1)(6)(5,9)(6));

