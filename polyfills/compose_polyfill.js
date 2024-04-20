// Composition polyfill

// The compose function is a concept commonly used in functional programming. It takes a list of functions as arguments and returns a new function. This new function, when called with an argument, applies each function in the list to the argument, passing the result of each function call as the argument to the next function.

function addFive(a) {
    return a + 5;
}

function subtractTwo(a) {
    return a - 2;
}

function multiplyFour(a) {
    return a * 4;
}
// In this example, composedFunction is a composition of the add, multiply, and subtract functions. When you call composedFunction(10), it applies subtract(10), then multiply(result_of_subtract), and finally add(result_of_multiply). The result is 17.


// Composition piolyfill
function compose(...functions){
    return function(arg){
        return functions.reduceRight((acc, fn) =>  fn(acc), arg)
    }
}

/* 
Algorithm:

1. compose is a function that takes an arbitrary number of functions as arguments using the rest parameter (...functions).
2. It returns a new function that also takes an arbitrary number of arguments using the rest parameter (...args).
3. Inside the returned function, it uses reduceRight to iterate over the functions in reverse order (from right to left).
4. For each function fn, it applies the function to the accumulated result acc, starting with the initial value of args.
5. The final result is the composition of all the functions applied from right to left.

*/

const evaluate = compose(addFive, subtractTwo, multiplyFour)

// console.log(evaluate(5))

// The pipe function is a concept commonly used in functional programming. It takes a list of functions as arguments and returns a new function. This new function, when called with an argument, applies each function in the list to the argument, passing the result of each function call as the argument to the next function.
// Pipe polyfill

function pipe(...functions) {
    return function(arg){
        return functions.reduce((acc, fn) => fn(acc), arg)
    }
}

// Using pipe
const pipedFunction = pipe(
  add,
  multiply,
  subtract
);

console.log(pipedFunction(10)); // Output: 24 (subtract(multiply(add(10))))

// In this example, pipedFunction is a composition of the add, multiply, and subtract functions. When you call pipedFunction(10), it applies add(10), then multiply(result_of_add), and finally subtract(result_of_multiply). The result is 24.

// The pipe function simplifies the process of composing functions, making the code more readable and allowing for a more modular approach to building complex operations. It is the reverse of the compose function, which applies functions from right to left.



