Array.prototype.customFilter = function (cb, arg) {
  if (this == null) {
    throw new Error();
  }
  let res = [];
  let context = this;
  let obj = Object(this);

  if (arguments.length > 1) {
    context = arg;
  }

  if (typeof cb !== "function") {
    throw new Error();
  }

  for (let i = 0; i < obj.length; i++) {
    if (i in obj) {
      let current = this[i];
      if (cb.call(context, current, i, obj)) {
        res.push(current);
      }
    }
  }

  return res;
};

const createDebounceFunction = function (cb, ms) {
  if (typeof cb !== "function") {
    throw new Error();
  }
  let timeout;
  return function () {
    const cbCall = () => {
      cb.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(cbCall, ms);
  };
};
