const swap = function (arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const SelectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    swap(arr, i, maxIndex);
  }
  return arr;
};

let arr = [4, 2, 5, 3];
console.log(SelectionSort(arr));
