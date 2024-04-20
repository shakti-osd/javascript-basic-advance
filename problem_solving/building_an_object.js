// Making of an Object

function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.getColor = function(){
    return this.color
}

const vikrantCar = new Car("Dark grey", "Lamborghini Aventador", "2026")
console.log("vikrant Car One", vikrantCar.getColor())
const vikrantCar2 = new Car("Black", "Rolls Royce Phantom", "2028")
console.log("vikrant Car Two", vikrantCar2.getColor())
