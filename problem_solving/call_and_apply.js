// Call and Apply methods

const car1 = {
    brand : "Lamborghini",
    getCarDescription: function(cost, year, color) {
        console.log(`The car is ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.`)
    }
}

const car2 = {
    brand: 'ferrari'
}

const car3 = {
    brand: "Rolls Royce"
}


const carOne = car1.getCarDescription("200,000", 2020, "Dark Grey")
// Call
const carTwo = car1.getCarDescription.call(car2, "150,000", 2021, "Red")
// Apply
const carThree = car1.getCarDescription.apply(car3, ["450,000", 2022, "Black"])