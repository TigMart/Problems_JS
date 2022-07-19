const swap = function (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const BubbleSort = function (arr) {
  let tmp;
  for (let i = 0; i < arr.length - 1; ++i) {
    tmp = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        tmp = true;
      }
    }
    if (tmp === false) break;
  }

  return arr;
};

let arr = [4, 5, 6];
console.log(BubbleSort(arr));
