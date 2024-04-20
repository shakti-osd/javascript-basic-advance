/*
Assuming d is an empty object in scope, say var d = {}, what is accomplished
using the below code?
*/
var d = {};

const obj = ["Zebra", "Horse"].forEach((k) => {
  d[k] = undefined;
});

console.log(Object.keys(d));
