let BinarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return "Novu";
};

console.log(BinarySearch([1, 2, 3, 4, 5, 5, 6], 4));
