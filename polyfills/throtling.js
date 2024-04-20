function throtle(func, limit) {
  let flag = true;

  return function (...args) {
    let context = this;
    func.apply(context, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, limit);
  };
}

