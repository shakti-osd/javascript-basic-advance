// Counter Function


function myFunc(){
    let count = 0

    return function(){
        count  += 1
        return count;
    }
}

const instanceOne = myFunc()
const instanceTwo = myFunc()

// console.log("instanceOne", instanceOne())
// console.log("instanceOne", instanceOne())

// console.log("instanceTwo", instanceTwo())



// Useful in cases like

function myFunc1(){
    let count = 0
    return function(){
        if(count < 4){
            console.log("Count is less than 4")
        } else {
            throw Error("Error Thrown")
        }
    }
}

const instanceOne1 = myFunc1()
const instanceTwo1 = myFunc1()

console.log("instanceOne1", instanceOne1())
console.log("instanceOne1", instanceOne1())

console.log("instanceTwo1", instanceTwo1())