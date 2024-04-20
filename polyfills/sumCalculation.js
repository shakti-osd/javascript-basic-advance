// Calculate the sum of all numeric values in a nested JavaScript object


let data = {
    a: {
        a: 'a',
        b: 1,
    },
    b: {
        b: 1,
    },
    c: {
        c: {
            e: 'e',
            b: {
                c: 'c',
                a: 1
            }
        }
    }
}

const sumCalcFunc = (obj) => {
    let sum = 0; // Declare sum inside the function
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === 'object') {
            sum += sumCalcFunc(obj[key]); // Add the recursive call to the sum
        }
    }
    return sum;
}

console.log(sumCalcFunc(data));



