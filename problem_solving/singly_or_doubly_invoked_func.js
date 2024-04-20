// Singly or doubly invoked function

// Build a func that returns the total of the two numbers added together.aThe function must be called
// by either passing in two numbers into a single invocation or by passing a single number into each of two invocations or a curried function.

function getTotal(){
    const args = Array.prototype.slice.call(arguments);

    console.log("Array.prototype", Array.prototype)
    console.log("Array.prototype.slice()", Array.prototype.slice())
    console.log("Array.prototype.slice.call(arguments)",  Array.prototype.slice.call(arguments))

    if (args.length == 2) {
        return args[0] + args[1]
    }
    // Currying a function
    else if (args.length == 1) {
        return function(nums1){
            return args[0] + nums1
        }
    }
}

// Single Invocation
console.log(getTotal(10, 20))
// Double Invocation
console.log(getTotal(3)(30))