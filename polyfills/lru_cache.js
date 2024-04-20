/* 

LRU (Least Recently Used) is a caching algorithm that removes the least recently used items first. It's commonly used in scenarios where there is a need to limit the size of a cache or maintain a fixed-size cache, discarding the least recently accessed items when the cache reaches its limit.

Here's an in-depth explanation of LRU:

Core Idea:
The basic idea of LRU is to keep track of the order in which items are accessed and prioritize removing the least recently used items when the cache is full.

*/

class LRU {
  constructor(max = 5) {
    this.max = max; // Maximum number of items the cache can hold
    this.cache = new Map(); // Using a Map to store key-value pairs
  }

  // Get the value associated with the given key
  get(key) {
    let item = this.cache.get(key); // Retrieve the item from the cache
    if (item) {
      // If the item exists, remove it from its current position and re-insert it to make it the most recently used
      this.cache.delete(key);
      this.cache.set(key, item);
      return item; // Return the value associated with the key
    } else {
      return undefined; // Return undefined if the key is not in the cache
    }
  }

  // Set a key-value pair in the cache
  set(key, value) {
    if (this.cache.has(key)) {
      // If the key already exists, remove it (since we're going to update it)
      this.cache.delete(key);
    } else if (this.cache.size >= this.max) {
      // If the cache is full, remove the least recently used item
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    // Set the new item as the most recently used
    this.cache.set(key, value);
  }
}

// Example usage:

const lruCache = new LRU(3);

lruCache.set("Name", "Vikrant");
lruCache.set("age", "27");
lruCache.set("company", "Coinbase");

console.log(lruCache.cache);
console.log(lruCache.get("age")); // Accessing "age" moves it to the most recently used position
console.log(lruCache.cache);

lruCache.set("Name", "Vikrant");
lruCache.set("age", "27");
lruCache.set("company", "Coinbase");

console.log(lruCache.cache);
console.log(lruCache.get("age")); // Accessing "age" moves it to the most recently used position
console.log(lruCache.cache);

/* 

Step-by-step Algorithm:

Initialization:

Set the maximum capacity of the cache (this.max).
Create an empty Map to store key-value pairs (this.cache).
Get Method:

When get(key) is called:
Retrieve the item from the cache using this.cache.get(key).
If the item exists, remove it from its current position and re-insert it at the end to mark it as the most recently used.
Return the value associated with the key.
If the item doesn't exist, return undefined.

Set Method:
When set(key, value) is called:
If the key already exists in the cache, remove it (we are going to update it).
If the cache is full (this.cache.size >= this.max), remove the least recently used item (the item at the beginning of the Map).
Set the new key-value pair in the cache.
The new key-value pair is now the most recently used item.
This way, the cache efficiently maintains the order of item access, allowing for quick retrieval of the most recently used items and efficient eviction of the least recently used items when the cache is full.

*/
