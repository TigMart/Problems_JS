function pow(a, n) {
  let result = a;
  while (n > 1) {
    result *= a;
    --n;
  }
  return result;
}

function powrec(a, n) {
  if (n < 1) return 1;
  return a * powrec(a, --n);
}

console.log(powrec(3, 3));
