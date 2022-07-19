function reduce(arr, fun, aggr) {
  arr.forEach(function (val, i) {
    if (i === 0 && aggr === undefined) {
      aggr = val;
    } else {
      aggr = fun(aggr, val, i);
    }
  });
  return aggr;
}

let map = function (arr, fun) {
  return reduce(
    arr,
    function (aggr, val, i) {
      aggr[i] = fun(val);
      return aggr;
    },
    []
  );
};

console.log(
  map([3, 8, 1, 0], function (val) {
    return val * 2;
  })
);
