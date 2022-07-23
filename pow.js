function pow(a, n) {
  let result = a;
  while (n > 1) {
    result *= a;
    --n;
  }
  return result;
}

console.log(pow(2, 3));
