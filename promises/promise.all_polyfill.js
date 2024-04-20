//

Promise.allPolyFill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.allPolyFill([
  importantAction("Roadside Coder"),
  likeTheVideo("Js Videos problems"),
  shareTheVideo("Interview Experience"),
]).then((res) => console.log(res)).catch((err) => console.log(err));


// Promise.all takes an array of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

// Here again we create our own executor function, and return back our promise object which would take in this executor.

// We create an array named fulfilledPromises and push values to it whenever any promise is resolved.
// If all promises are resolved ( fulfilledPromises.length === promises.length ) we invoke resolve .
// If any promise is rejected we invoke the reject










// Promise.race Polyfill
// Promise.race() returns the first settled value (either fulfillment or rejection).
// It takes an iterable object as input like array.


export function promiseRace(promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise
        .then(resolve) // resolve outer promise, as and when any of the input promise resolves
        .catch(reject); // reject outer promise, as and when any of the input promise rejects
    });
  });
}


// Promise.allSettled Polyfill
// The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.


function allSettled(promises) {
  let mappedPromises = promises.map((p) => {
    return p.then((value) => {
        return {
          status: 'fulfilled',
          value,
        };
      })
      .catch((reason) => {
        return {
          status: 'rejected',
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};
// Promise.any() Polyfill
// Promise.any() takes an iterable of Promise objects which is promises in our polyfill.
// It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise.
// If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// COPY

// COPY
// function any(promises) {
//   let results = [];
//   var counter = 0;

//   return new Promise((resolve, reject) => {
//     promises.forEach((p, index) => {
//       p.then((result) => {
//         resolve(result)
//       }).catch((err) => {
//          results.push(err);
//          ++counter;
//         if (counter === promises.length) {
//           reject(results);
//         }
//       });
//     });
//   });
// };




Promise.myAll = (promises) => {
  return new Promise((resolve, rej) => {
    results = []

    if(!promises.length) {
      resolve(results)
      return
    }

    pending = promises.length

    promises.forEach((promise, idx)=> {
      Promise.resolve(promise).then((res) => {
        results[idx] = res
        pending --;

        if(pending === 0){
          resolve(results)
        }
      }, reject)


    })


  })
}





Promise.myAllSettled = function(promises){
  let mappedPromises = promises.map((promise, idx) => {
    promise.then((res) => {
      return {
        status: "isFulfilled",
        value: res,
      }
    }).catch((err) => {
      return {
        status: "isRjected",
        value: err
      }
    })
  })

  return Promise.all(mappedPromises)
}



