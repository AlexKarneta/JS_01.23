Array.prototype.customFilter = function (arr, cb) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};
