let x = [1, 2, 3];
let y = [4, 5, 6];

let concat = function (a, b) {
  let result = [];
  a.forEach(function (val) {
    result.push(val);
  });
  b.forEach(function (val) {
    result.push(val);
  });
  return result;
};

console.log(concat(x, y));
