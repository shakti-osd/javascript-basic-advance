// Define the custom iterator method
Array.prototype.customIterator = function () {
    let index = 0;
  
    // Define the next function for the iterator
    const next = () => {
      if (index < this.length) {
        return { value: this[index++], done: false };
      } else {
        return { done: true };
      }
    };
  
    // Return the iterator object
    return {
      next: next
    };
  };
  
  // Example usage
  const myArray = [1, 2, 3, 4, 5];
  
  // Get the custom iterator
  const customIterator = myArray.customIterator();
  
  // Use the iterator to loop through the array
  let result = customIterator.next();
  while (!result.done) {
    console.log(result.value);
    result = customIterator.next();
  }
