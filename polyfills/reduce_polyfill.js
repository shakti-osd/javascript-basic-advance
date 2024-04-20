const arr1 = [1, 2, 3, 4]


const newVal = arr1.reduce((acc, currElem, currIndex, arr) => {
    return acc + currElem
}, 0)

console.log(newVal)


Array.prototype.myReduce = function(cb, initValue){
    let accumulator = initValue;

    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
        return accumulator
    }

}

const arr2 = [1, 2, 3, 4]


const newVal2 = arr2.reduce((acc, currElem, currIndex, arr) => {
    return acc + currElem
}, 0)

console.log(newVal)



