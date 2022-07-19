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

console.log(
  reduce([1, 2, 3, 4, 5], function (aggr, val) {
    return Math.max(aggr, val);
  })
);
