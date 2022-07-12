const swap = function (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const BubbleSort = function (arr) {
  let count = 0;
  let bool;
  for (let i = 0; i < arr.length - 1; ++i) {
    bool = false;
    for (let j = 0; j < arr.length - i; ++j) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1);
        bool = true;
      }
      ++count;
    }
    if (bool === false) break;
  }
  console.log(count);
  return arr;
};

let arr = [6, 5, 4, 3, 2, 1];
console.log(BubbleSort(arr));
