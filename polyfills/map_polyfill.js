const arr1 = [1, 2, 3, 4];

const newArr1 = arr1.map((elem, key) => elem * 2)

Array.prototype.myMap = function(cb) {
    let temp = [];

    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const arr2 = [1, 2, 3, 4];

const newArr2 = arr2.myMap((elem, key) => elem * 2)

console.log(arr2, newArr2)




Array.prototype.myForEach = function(cb) {
    // let result = []
    for(let i = 0; i < this.length; i++) {
        cb[i] = cb(this[i], i, this)
    }
    // return result
}

const arr3 = [2, 3, 4, 5, "m"]
const arr3New = arr3.myForEach((elem) => {
    console.log(elem)
})
