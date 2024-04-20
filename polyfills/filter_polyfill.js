
const arr1 = [1, 2, 3, 4];

const newArr1 = arr1.filter((elem, key) => elem > 1)
console.log(newArr1)

Array.prototype.myFilter = function(cb){
    let temp = [];

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp
}

const arr2 = [1, 2, 3, 4];

const newArr2 = arr2.filter((elem, key) => elem > 1)
console.log(newArr2)
