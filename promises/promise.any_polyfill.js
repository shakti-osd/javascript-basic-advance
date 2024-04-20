/* 

Promise.any() takes an iterable of Promise objects which is promises in our polyfill.
It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise.
If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

*/


const any = function(promisesArray) {
  const promiseErrors = new Array(promisesArray.length);
  let counter = 0;
  
  //return a new promise
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // resolve, when any of the input promise resolves
        .catch((error) => {
          promiseErrors[index] = error;
          counter = counter + 1;
          if (counter === promisesArray.length) {
            // all promises rejected, reject outer promise
            reject(promiseErrors);
          }
      }); // reject, when any of the input promise rejects
    });
  });
};






Promise.any = function(promises) {
  let promiseErr = Array(promises).length
  let counter = 0

  return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        Promise.resolve(promise).then(resolve)
        .catch((err) => {
          promiseErr[idx] = err

          counter += 1

          if(counter === promises.length){
            reject(promiseErr)
          }
        })
      })
  })

  
}