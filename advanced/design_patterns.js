/* 

1. Singleton Pattern:
The Singleton pattern ensures that a class has only one instance and provides a global point to that instance. It's often used when a single instance of a class is required to control actions such as creating a single point of access, controlling concurrent access to shared resources, or coordinating actions across the system.

Example in JavaScript:

javascript
Copy code
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  someMethod() {
    // Do something
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);  // Output: true
2. Factory Pattern:
The Factory pattern provides an interface for creating instances of a class, but allows subclasses to alter the type of instances that will be created. It's useful when the exact type of an object to be created is determined at runtime.

Example in JavaScript:

javascript
Copy code
class Product {
  constructor(name) {
    this.name = name;
  }
}

class ConcreteProductA extends Product {
  // Additional functionality for Product A
}

class ConcreteProductB extends Product {
  // Additional functionality for Product B
}

class Factory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA('Product A');
      case 'B':
        return new ConcreteProductB('Product B');
      default:
        throw new Error('Invalid product type');
    }
  }
}

const factory = new Factory();
const productA = factory.createProduct('A');
const productB = factory.createProduct('B');
3. Observer Pattern:
The Observer pattern defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically. It's useful for implementing distributed event handling systems.

Example in JavaScript:

javascript
Copy code
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    // Handle the updated data
    console.log(`Received update: ${data}`);
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Some data');  // Both observers will be notified
These are just a few examples, and there are many more design patterns that can be applied depending on the specific problem you're trying to solve. Each pattern addresses a particular design issue or consideration and provides a proven solution.







*/