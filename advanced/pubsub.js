// Publisher (Subject) Class
class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    // Add a subscriber to the list
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    // Remove a subscriber from the list
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
  
    // Notify all subscribers of a change
    notify(data) {
      this.subscribers.forEach(subscriber => {
        subscriber.update(data);
      });
    }
  }
  
  // Subscriber (Observer) Class
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    // Update method called by the publisher
    update(data) {
      console.log(`${this.name} received an update: ${data}`);
    }
  }
  
  // Example Usage
  const newsPublisher = new Publisher();
  
  const subscriber1 = new Subscriber('Subscriber 1');
  const subscriber2 = new Subscriber('Subscriber 2');
  
  newsPublisher.subscribe(subscriber1);
  newsPublisher.subscribe(subscriber2);
  
  // Notify subscribers of a change
  newsPublisher.notify('Breaking news: Important announcement!');
  
  // Unsubscribe one of the subscribers
  newsPublisher.unsubscribe(subscriber1);
  
  // Notify remaining subscribers
  newsPublisher.notify('More updates: Stay tuned!');

  
//   The publisher-subscriber pattern is designed to facilitate communication between components in a loosely coupled manner. In this pattern, there is a central entity, the publisher, which maintains a list of subscribers. Subscribers are interested in certain events or changes in the publisher and get notified when these events occur. This enables a decoupled and modular design where publishers and subscribers can evolve independently.

// Advantages:
// Decoupling:

// Subscribers and publishers are loosely coupled, meaning they are not directly dependent on each other. This enhances flexibility and maintainability.
// Extensibility:

// It's easy to add new subscribers without modifying existing code. Similarly, new types of publishers can be introduced without affecting existing subscribers.
// Modularity:

// Components can be easily reused in different contexts. Subscribers are isolated from the implementation details of the publisher.
// Event-Driven Architecture:

// Well-suited for event-driven architectures where components can react to changes or events without direct dependencies.
// Disadvantages:
// Complexity:

// In large systems, managing numerous subscribers and publishers might become complex. Debugging and understanding the flow of events can be challenging.
// Ordering of Notifications:

// The order in which subscribers are notified may not be guaranteed, which might be a problem in certain scenarios where order matters.
// Potential Memory Leaks:

// If subscribers are not properly unsubscribed when they are no longer needed, it can lead to memory leaks as the references are not released.
// Overhead:

// There is a slight overhead associated with the implementation of the pattern. If not carefully managed, it might impact performance.


// In the provided JavaScript example:

// The Publisher is the newsPublisher.
// The Subscribers are instances of the Subscriber class (subscriber1 and subscriber2).
// The subscribe, unsubscribe, and notify methods demonstrate the core functionality.
// In the notify method, the update method of each subscriber is called, simulating the delivery of updates to all interested parties.