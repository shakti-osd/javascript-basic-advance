/* 
Given an object with nested objects and arrays, implement a deep clone function. Handle circular references appropriately.

*/

// Intuition:
// The deep clone function aims to create a copy of a given object, including all nested objects and arrays. To handle circular references, we need to keep track of objects that have been visited during the cloning process. We use a Map to store the relationship between original objects and their corresponding clones. If a circular reference is encountered, the function will return the previously cloned object instead of attempting to clone it again, thus preventing an infinite loop.

/* In JavaScript, new Map() is a constructor that creates a new instance of the Map object, which is a built-in data structure introduced in ECMAScript 2015 (ES6) for storing key-value pairs. Unlike objects, where keys are always strings or symbols, in a Map, keys can be of any data type, including objects or primitive values like strings, numbers, and booleans.*/

function deepClone(obj, visited = new Map()) {
  debugger;
  // If the object is a primitive type or null, return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // If the object has been visited before, return the clone
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // Create a new object or array for the clone
  const clone = Array.isArray(obj) ? [] : {};

  // Save the clone in the Map to handle circular references
  visited.set(obj, clone);

  // Iterate through the keys or indices of the original object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively deep clone nested objects and arrays
      clone[key] = deepClone(obj[key], visited);
    }
  }

  return clone;
}

// Example usage:
const originalObject = [1, 2, [3, 4], 5,6]
// // Introduce circular reference
// originalObject.circularRef = originalObject;

const clonedObject = deepClone(originalObject);

console.log(clonedObject);

// 1. Base Case:
// If the input obj is null or a primitive type, return it directly since there is no need to clone.

// 2.Check for Circular Reference:
// If the obj has been visited before (tracked by the visited map), return the corresponding cloned object.

// 3.Create Clone:
// Create a new object or array (clone) based on the type of the original object.

// 4.Handle Circular References:
// Save the mapping of the original object to its clone in the visited map to handle circular references.

// 5.Clone Nested Objects/Arrays:
// Iterate through the keys or indices of the original object.
// Recursively call deepClone on each nested property and assign the result to the corresponding property in the clone object.

// 6.Return Clone:
// Return the cloned object.




function deepClone(obj, visited = new Map()){
  if(obj === null || typeof obj !== "object"){
    return obj
  }

  if(visited.has(obj)){
    return visited.get(obj)
  }

  let clone = Array.isArray(obj) ? [] : {}

  visited.set(obj, clone)

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      clone[key] = deepClone(obj[key], visited)
    }
  }
  return clone


}