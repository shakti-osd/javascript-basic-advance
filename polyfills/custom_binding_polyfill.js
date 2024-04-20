// bind, call, apply

//1. Apply

let car1 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

// Call polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }

  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car1, "$", 500000);

// Apply polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ["$", 400000]);

// Bind polyfill
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Cannot be bound as It is not callable");
  }
  // Set the context of the original function
  context.fn = this;
  // Return a closure function
  return function (...newArgs) {
    // Concatenate the arguments from the binding and the new arguments
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.bind(car1, "$");

console.log(newFunc(700000));

/* 
  
Algorithm for myBind:

1.) Check if the calling object is a function:
  Ensure that the calling object (this) is a function. If not, throw an error indicating that the object cannot be bound because it is not callable.
2.) Create a new function with a specified context and arguments:
  Create a new function that will be returned by myBind.
  Set the context of the original function by adding a property fn to the provided context object. The original function (this) is assigned to this property.
3.) Return a closure function:
  The closure function takes any number of arguments (newArgs).
  When the closure function is called, it invokes the original function (context.fn) with the concatenated arguments from the binding and the new arguments.  
*/


