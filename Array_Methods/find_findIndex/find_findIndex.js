let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let findIndex = function (arr, fun) {
  let i = 0;
  while (i < arr.length) {
    if (fun(arr[i])) {
      return i;
    }
    i++;
  }
  return -1;
};

let find = function (arr, fun) {
  let i = findIndex(arr, fun);
  if (i !== -1) {
    return arr[i];
  }
  return undefined;
};

console.log(
  findIndex(arr, function (val) {
    return val > 4;
  })
);
console.log(
  find(arr, function (val) {
    return val > 6;
  })
);
