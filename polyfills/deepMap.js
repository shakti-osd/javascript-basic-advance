//A deep map function in JavaScript recursively transforms values in nested objects and arrays. Here's an example implementation:

function deepMap(obj, transformFunc) {
    if (Array.isArray(obj)) {
      // If the object is an array, map over each element
      return obj.map((item) => deepMap(item, transformFunc));
    } else if (typeof obj === 'object' && obj !== null) {
      // If the object is an object (but not null), map over each property
      const result = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = deepMap(obj[key], transformFunc);
        }
      }
      return result;
    } else {
      // Base case: apply the transformation to non-object, non-array values
      return transformFunc(obj);
    }
  }
  
  // Example usage:
  
  const input = {
    a: 1,
    b: [2, 3, { c: 4, d: [5, 6] }],
    e: { f: 7, g: [8, 9] },
  };
  
  const transformed = deepMap(input, (value) => value * 2);
  
  console.log(transformed);

