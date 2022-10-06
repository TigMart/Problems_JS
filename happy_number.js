function isHappy(num) {
  let sum = 0;
  while (num > 0) {
    let x = num % 10;
    num = Math.floor(num / 10);
    sum += x * x;
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  return isHappy(sum);
}
console.log(isHappy(67));

const foo = (n, res = 0) => {
  if (n) {
    return foo(Math.floor(n / 10));
  }
  return res;
};

const happy = (num, map = {}) => {
  if (num != 1) {
    if (map[num]) {
      return false;
    }
    map[num] = 1;
    return happy(foo(num), map);
  }
  return true;
};

console.log(happy(12));
