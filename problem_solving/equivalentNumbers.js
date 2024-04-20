// Equivalent numbers
console.log(100.3 * 3) // 300.9 

console.log(900.9 === 300.3 * 3) //false

console.log(300.3 * 3) // 900.9000001

console.log((300.3 * 3).toFixed(2)) // 900.90

console.log(Number((300.3 * 3).toPrecision(12))) // 900.9
