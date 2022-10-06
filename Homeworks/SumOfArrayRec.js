const SumOfArray = (arr) => {
  if (!arr || !arr instanceof Array)
    throw new Error("you must pass an argument and it must be an array");
  return !arr.length ? 0 : arr[0] + SumOfArray(arr.slice(1));
};


let arr = [1, 2, 3];
console.log(SumOfArray(arr));
