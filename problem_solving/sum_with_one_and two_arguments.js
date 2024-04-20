/*
Write a sum method which will work with either syntax below:
1. sum(2, 3)
2. sum(2)(3)
*/
function sum(x){
    if (arguments.length === 2) {
        return arguments[0] + arguments[1]
    } else if(arguments.length == 1){
        return function(y){
            return x + y;
        }
    }

}
console.log(sum(2, 3))
console.log(sum(2)(3))