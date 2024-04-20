
String.prototype.myCharAt  = function(index) {
    const inputStr = this;
    const rightIndex = index !== null ? index : 0

    if(rightIndex < 0 || rightIndex > this.length) {
        return ""
    }
    return inputStr[rightIndex]
}



// FIND
if (!Array.prototype.find) {
    Array.prototype.find = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }
      const array = Object(this);
      const length = array.length >>> 0; // Convert to an unsigned 32-bit integer
      console.log(length)
      for (let i = 0; i < length; i++) {
        if (i in array && callback.call(thisArg, array[i], i, array)) {
          return array[i];
        }
      }
      return undefined;
    };
  }


Array.prototype.myFind = function(cb){
 for(let i = 0; i < this.length; i ++){
  if(i in array && cb.call(thisArg, arr[i], i, array)){
    return array[i]
  }
 }
}


//   FindIndex
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      }
  
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }
  
      let array = Object(this);
      let length = array.length >>> 0; // Convert to an unsigned 32-bit integer
  
      for (let i = 0; i < length; i++) {
        if (i in array && callback.call(thisArg, array[i], i, array)) {
          return i;
        }
      }
  
      return -1;
    };
  }


  Array.prototype.myFindIndex = function(cb, thisArgs){

    let array = Object(this)
    let length  = array.length >>> 0
    for(let i = 0; i < length; i ++){
      if(i in array && cb.call(thisArgs, array[i], i, array)){
        return i
      }
      
    }
    return -1;
  }



// Intersection
function intersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new TypeError('Both arguments must be arrays');
    }
  
    // Use a Set to efficiently check for common elements
    const set1 = new Set(array1);
    const result = array2.filter(item => set1.has(item));
  
    return result;
  }


  function intersect(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
      throw new Error("Both argumnet must be arrays")
    }

    const set1 = new Set(arr1)
    const result = arr2.filter((elem) => set1.has(elem))
    return result
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  
  const commonElements = intersection(arr1, arr2);
  console.log(commonElements); // Output: [3, 4, 5]

  
//IntersectionWith

function intersectionWith(array1, array2, comparator) {
    if (!Array.isArray(array1) || !Array.isArray(array2) || typeof comparator !== 'function') {
      throw new TypeError('Invalid input. Please provide two arrays and a comparator function.');
    }
  
    return array1.filter(item1 => array2.some(item2 => comparator(item1, item2)));
  }


  function intersectionWith(arr1, arr2, comparator){
    if(!Array.isArray(array1) || !Array.isArray(array2) || typeof comparator !== "function" ){
      throw new Error("")
    }
    return arr1.filter((elem1) => arr2.some((elem2) => comparator(elem1, elem2)))
  }
  
  // Example usage:
  const ar1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Doe' }];
  const ar2 = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Bob' }];
  
  const intersection = intersectionWith(ar1, ar2, (item1, item2) => item1.id === item2.id);
  
  console.log(intersection);
  // Output: [ { id: 2, name: 'Jane' } ]
  