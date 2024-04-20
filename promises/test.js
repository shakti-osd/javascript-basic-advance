Promise.myAny = function (promises) {
  let promiseErr = Array(promises)
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
        Promise.resolve(promise, idx).then((res) => {
            resolve(res)
        }).catch((err) => {
            count += 1
            promiseErr[idx] = err

            if(count === promiseErr.length){
                reject(err)
            }
        })
    })
  })

};
