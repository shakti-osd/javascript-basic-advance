// Object Properties

// Problems: 1
const a = {}

const b = {name: "b"}
const c = {name: "c"}

a[b] = 200;
a[c] = 400
console.log(a[b]); // 400



// Problems: 2
const obj1 = {}, obj2 = {key: "b"}, obj3 = {key : "c"}

obj1[obj2] = 123; // { '[object Object]': 123 }

obj1[obj3] = 456; // { '[object Object]': 456 }

console.log(obj1[obj2]); // 456
