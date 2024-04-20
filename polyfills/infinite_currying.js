function add(a) {
  return (b) => {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(2)(2)(9)());

function sum(num) {
  let currentSum = num;

  function add(nextNum) {
    currentSum += nextNum;
    return add; // Return the function for chaining
  }

  add.toString = function () {
    return currentSum;
  };

  return add; // Return the function for chaining
}

// console.log(sum(1)(2)(3).toString()); // Output: 6
