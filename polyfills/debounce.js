/* 

a debounce function, a utility function that limits the rate at which a function can fire.
Here's an algorithm explaining how the debounce function works:


Algorithm for debounce:
1. Initialize a timer identifier (timerId):

2. Declare a variable timerId outside of the returned function to keep track of the timer set by setTimeout.
Return a new function (debounced function):

The debounce function returns a new function that will be used to debounce the original function (func).
Clear the existing timer:

Inside the debounced function, clear the existing timer using clearTimeout(timerId) to cancel the execution of the original function.
Set a new timer using setTimeout:

Set a new timer using setTimeout to delay the execution of the original function (func).
The timer is set to trigger after the specified delay time.
Call the original function with the provided arguments after the delay:

Inside the callback function passed to setTimeout, call the original function (func.apply(this, args)) with the provided arguments (args).
The apply method is used to ensure that the correct context (this) is maintained.

*/

function debounce(func, delay){
    let timerId;
    return function(...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

function sayHello(x) {
    console.log(x)
}


