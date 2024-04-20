// Array indexOf

const myArr = [5];
const anotherArray = myArr;

console.log([10, 20, 30, 40, 50].indexOf(30)) // 2

console.log([{name: "Ram"}, {name: "Arjun"}].indexOf({name: "Arjun"})) // -1 because two different objects are not same because they are passed by reference

console.log("hello World".indexOf('o')) // 4

console.log([[1], [2], [3], [4]].indexOf([2])) // -1 because two different objects(arrays) are not same because they are passed by reference