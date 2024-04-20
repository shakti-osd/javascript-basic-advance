/* 

The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

It is used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

*/

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
  

