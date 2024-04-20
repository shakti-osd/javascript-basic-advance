// Concat Polyfills

function pushValues(src, dest) {
  for (var i = 0; i < dest.length; i++) {
    src.push(dest[i]);
  }
}

Array.prototype.myconcat = function (...args) {
  let res = [...this];
  for (var i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      pushValues(res, args[i]);
    } else {
      res.push(args[i]);
    }
  }
  return res;
};

console.log("concat", [1, 2, 3].myconcat([1, 2, 3,4, 5], 9, 10))

/* 

Polyfill Algorithm for concat:
1.) Initialize result with a copy of the original array:

2.) Create a shallow copy of the current array using the spread syntax: let result = [...this];
Iterate through each argument:

3.) For each argument in the provided arguments list (...args):
If the argument is an array (Array.isArray(args[i])), use the helper function pushValues to concatenate its elements to the result.

4.) If the argument is not an array, push it directly to the result array.
Return the concatenated result:

5.) The final result is the concatenated array.

Helper Function pushValues:
Concatenate values from source to destination:
Iterate through each element in the destination array (dest).
Push each element to the source array (src).

*/

