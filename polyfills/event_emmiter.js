/*

In JavaScript, an event emitter is a pattern or a mechanism that allows objects to subscribe to and listen for events, and then react to those events when they occur. This pattern is commonly used to facilitate communication between different parts of an application, enabling a more modular and loosely coupled design.

The basic idea behind an event emitter is that there is an object (the emitter) that maintains a list of subscribers (listeners or observers) and notifies them when a particular event occurs. Here's a simple explanation of the key concepts:

Event: A specific occurrence or action that is of interest to other parts of the application.

Emitter: An object that emits events. It maintains a list of subscribers and notifies them when a specific event occurs.

Subscriber/Listener/Observer: An object or function that wants to be notified when a specific event occurs. It "listens" for events emitted by the emitter.

An event emitter is a design pattern widely used in JavaScript for handling and managing events. It enables communication between objects in a decoupled manner, allowing one part of your application to notify others about changes or specific actions without having direct references to them. Event emitters are commonly used in Node.js for handling asynchronous events, but they can also be implemented in the browser environment.

*/


class EventEmitter{
  constructor(){
    this.events = {}
  }

  on(eventName, handler){
    if(!this.events[eventName]){
      this.events[eventName] = []
    }
    this.events[eventName].push(handler)
  }

  off(eventName, handler) {
    if(this.events[eventName]){
      this.events[eventName] = this.events[eventName].filter((eventHandler) =>  eventHandler !== handler)
    }
  }

  emit(eventName, data) {
    if(this.events[eventName]){
      this.events[eventName].forEach((eventHandler) => eventHandler(data))
    }
  }
}


// Now, let's break down the key components and the intuition behind them:

// Constructor: Initializes the event registry (this.events) as an empty object.

// on(eventName, handler): Adds an event handler function (handler) to the specified event (eventName). If the event doesn't exist in the registry, it creates an array to hold the handlers.

// off(eventName, handler): Removes a specific event handler from the specified event. It checks if the event exists and then filters out the handler from the array of handlers.

// emit(eventName, data): Triggers the specified event, calling all registered handlers with optional data. If the event has handlers, it iterates through them, invoking each with the provided data.

// Here's a simple example of using the EventEmitter:

const myEmitter = new EventEmitter();

// Register an event handler
myEmitter.on('myEvent', (data) => {
  console.log('Event handled:', data);
});

// Trigger the event
myEmitter.emit('myEvent', { message: 'Hello, Event!' });

// Output: Event handled: { message: 'Hello, Event!' }
// This implementation provides a basic understanding of how an event emitter works. In real-world scenarios, libraries like Node.js's EventEmitter or third-party libraries are often used, as they offer additional features and optimizations.

