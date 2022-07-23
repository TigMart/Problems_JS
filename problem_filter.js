let arr = [5, 10, 15, 20];

const removeAtIndex = function (arr, index) {
  // return arr.filter((val, i) => {
  //   return i !== index;
  // });
  arr.splice(index, 1);
  return arr;
};

console.log(removeAtIndex(arr, 2));
