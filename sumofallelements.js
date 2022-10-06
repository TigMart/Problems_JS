let arr = [4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9];

function sumOfArrayEl(arr) {
  return arr.reduce((aggr, val) => {
    if (Array.isArray(val)) {
      return aggr + sumOfArrayEl(val);
    }
    return aggr + val;
  }, 0);
}

console.log(sumOfArrayEl(arr));

function bar(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(bar("hello"));
function foo(s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;
    start++;
    end--;
  }
  return s;
}

let x = foo("hello world!");

console.log(x);
