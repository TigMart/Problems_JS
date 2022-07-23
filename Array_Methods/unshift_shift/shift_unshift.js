let x = [7, 10, 12];

// UNSHIFT
let unshift = function (arr, val) {
  let i = arr.length - 1;
  while (i >= 0) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[0] = val;
};

unshift(x, 99);
console.log(x);

// SHIFT
let shift = function (arr) {
  let tmp = arr[0];
  let i = 0;

  while (i < arr.length - 1) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr.length--;
  return tmp;
};

console.log(shift(x));
console.log(x);
