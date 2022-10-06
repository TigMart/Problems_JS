let foreachrec = function (arr, func) {
  function loop(i) {
    if (i >= arr.length) return;
    func(arr[i], i);
    loop(i + 1);
  }
  loop(0);
};

let arr = [1, 2, 3, 4];
foreachrec(arr, function (val, index) {
  console.log(val + " at index " + index);
});
