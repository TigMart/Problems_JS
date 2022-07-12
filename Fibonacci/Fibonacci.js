// Iterative
const FibonacciIterative = function (num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
};

console.log(FibonacciIterative(6));

// Recursive

const FibonacciRecursive = function (num) {
  if (num <= 1) return num;
  return FibonacciRecursive(num - 1) + FibonacciRecursive(num - 2);
};

console.log(FibonacciRecursive(5));
