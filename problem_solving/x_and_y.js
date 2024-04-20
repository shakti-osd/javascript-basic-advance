var x = 10;

function y(){
    x = 100;
    return;
    function x(){};
}

y();

console.log(x); // 10 

// Explanation:
// Inside the function y(), there's x = 100;. This line seems like it's modifying the global x, but due to the function declaration function x(){}, it behaves differently. In JavaScript, function declarations like function x(){} are hoisted to the top of their function scope. Therefore, the declaration function x(){} is hoisted within y(), which means it creates a local variable x inside the y() function.
// When y() is called, x = 100; modifies the local variable x inside the function y, not the global x.

// The return; statement immediately exits the function y().

// console.log(x); prints the value of the global variable x, which remains 10 because the modification x = 100; inside the function y() only affects the locally declared x within that function scope, not the global variable.