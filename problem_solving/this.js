// this keyword

const house = {
  price: 10000000,
  squareFeet: 2500,
  owner: "Rajinder Kumar Bandral",
  getPricePerSquareFoot: function () {
    return this.price / this.squareFeet
  },
}

console.log(house.getPricePerSquareFoot())

// in arrow function this keyword represents the enclosing lexical context

const student = {
  name: "Shakti",
  fullName: function () {
    const result = () => {
      console.log(this)
    }
    result()
  },
}
student.fullName()
