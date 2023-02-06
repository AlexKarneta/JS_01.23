function makeDeepCopy(obj) {
  if (!arguments.length || typeof obj !== "object") {
    throw new Error();
  }
  let duplicate;

  if (Array.isArray(obj) || obj instanceof Map) {
    duplicate = [];
  } else {
    duplicate = {};
  }
  if (obj instanceof Set) {
    duplicate = new Set();
    obj.forEach((item) => {
      duplicate.add(makeDeepCopy(item));
    });
    return duplicate;
  }
  if (obj instanceof Date) {
    duplicate = new Date();
    duplicate.setTime(obj.getTime());
    return duplicate;
  }
  const ITER_OBJ = obj instanceof Map ? [...obj] : obj;

  for (const prop in ITER_OBJ) {
    if (typeof ITER_OBJ[prop] == "object") {
      duplicate[prop] = makeDeepCopy(ITER_OBJ[prop]);
    } else {
      duplicate[prop] = ITER_OBJ[prop];
    }
  }

  return obj instanceof Map ? new Map(duplicate) : duplicate;
}

function selectFromInterval(arr, startIndex, endIndex) {
  if (
    !Array.isArray(arr) ||
    !isFinite(startIndex) ||
    !isFinite(endIndex) ||
    arr.length === 0
  ) {
    throw new Error();
  }

  if (arr.every((item) => typeof item == "number")) {
    let res = [startIndex, endIndex];
    res.sort((a, b) => a - b);
    let start = res[0],
      end = res[1];

    let result = [];
    for (let item of arr) {
      if (item >= start && item <= end) {
        result.push(item);
      }
    }
    return result;
  } else throw new Error();
}

function createIterable(from, to) {
  if (
    isNaN(from) ||
    !isFinite(from) ||
    isNaN(to) ||
    !isFinite(to) ||
    to <= from
  ) {
    throw new Error();
  }

  const range = {
    from: from,
    to: to,
  };

  iterObj[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  return range;
}
