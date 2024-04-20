var arr1 = "john".split("");
console.log(arr1)
var arr2 = arr1.reverse();
// [n, h, o, j]
var arr3 = "jones".split("");
// [j o h n ]

arr2.push(arr3);
// [n h o j j o h n]
console.log("array1: length = " + arr1.length + " last = " + arr1.slice(-1));
console.log("array2: length = " + arr2.length + " last = " + arr2.slice(-1));
