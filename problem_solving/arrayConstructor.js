// Array constructor

const arr1 = []

const arr2 = new Array(50)

for (const i of arr2) {
    arr2.fill(12)
}
const arr3 = new Array(1, 2, "3", 4, "five", null, function(){console.log("raaja")})

const arr4 = new Array([1, 2, 3, 4, 5], 6)


console.log("arr1: ", arr1)
console.log("arr2: ", arr2)
console.log("arr3: ", arr3)
console.log("arr4: ", arr4)
