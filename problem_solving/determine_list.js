// Determine list
const list1 = [1, 2, 3, 4, 5]
const list2 = list1;

list1.push(6, 7, 8)

// Call by reference
console.log(list2)
// [1, 2, 3, 4, 5, 6, 7, 8]

const listOne  = [1, 2, 3, 4, 5]
const listTwo  = listOne.slice()

listOne.push(6, 7, 8)

console.log("listTwo:", listTwo)
console.log("listOne:", listOne)