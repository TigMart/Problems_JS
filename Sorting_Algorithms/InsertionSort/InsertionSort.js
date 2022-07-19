const InsertionSort = function (arr) {
  for (let i = 1; i < arr.length; ++i) {
    let j = i - 1;
    let key = arr[i];
    while (arr[j] < key && j >= 0) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = key;
  }
  return arr;
};

let arr = [6, 7, 8];
console.log(InsertionSort(arr));
