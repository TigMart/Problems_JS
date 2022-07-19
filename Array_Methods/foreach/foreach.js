let foreach = function (arr, fun) {
  let i = 0;
  while (i < arr.length) {
    fun(arr[i], i);
    ++i;
  }
};

let arr = [1, 2, 3, 4];
foreach(arr, function (val, index) {
  console.log(val, index);
});
