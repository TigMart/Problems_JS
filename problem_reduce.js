let arr = [
  { name: "Joe", age: 13, hairColor: "red" },
  { name: "Mike", age: 10, hairColor: "brown" },
  { name: "Jane", age: 4, hairColor: "red" },
  { name: "Susan", age: 30, hairColor: "brown" },
];

let getAvgAgeByColor = function (arr, color) {
  return arr
    .filter((obj) => {
      if (obj.hairColor === color) {
        return obj;
      }
    })
    .reduce((aggr, obj, i) => {
      aggr = aggr + obj.age;
      return aggr / (i + 1);
    }, 0);
};

console.log(getAvgAgeByColor(arr, "red"));
