var sumOfUnique = function (nums) {
  return nums
    .filter((val, i, arr) => {
      return arr.indexOf(val) === i;
    })
    .reduce((aggr, val) => aggr + val);
};

console.log(sumOfUnique([1, 2, 3, 2, 4, 3, 4, 56, 6]));
