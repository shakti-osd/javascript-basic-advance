console.log("0 || 1 = " + (0 || 1)) // 0 || 1 = 1

console.log("1 || 2 = " + (1 || 2)) // "1 || 2 = 1"

console.log("0 && 1 = " + (0 && 1)) // 0 && 1 = 0

console.log("1 && 2 = " + (1 && 2)) // 1 && 2 = 2 
// explanation: 
// '&&' operator evaluates both operands and returns the "last value" i.e. 2 in this case 
//  if both operands are truthy.


console.log(false == "0") // true
console.log(false === "0") // false

