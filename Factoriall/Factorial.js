/// Recursive

const FactorialRec = function (num) {
  if (num <= 1) return 1;
  return num * FactorialRec(num - 1);
};

console.log(FactorialRec(4));

///Iterative

const FactorialIterative = function (num) {
  if (num <= 1) return 1;
  let result = 1;
  for (let i = 1; i <= num; ++i) {
    result *= i;
  }
  return result;
};
console.log(FactorialIterative(5));

function fac(a) {
  let res = 1;
  while (a > 1) {
    res *= a;
    --a;
  }
  alert(res);
}
fac(1);

// Caching

let cache = [];

const FactorialCaching = function (num) {
  if (num <= 1) return 1;
  if (cache[num]) {
    return cache[num];
  }
  cache[num] = num * FactorialCaching(num - 1);
  return cache[num];
};

console.log(FactorialCaching(3));
