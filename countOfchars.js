function countOfChars(str) {
  let map = new Map();
  let arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    map.set(arr[i], count);
  }
  for (const key of str) {
    let count = map.get(key);
    map.set(key, count + 1);
  }
  console.log(map);
}

countOfChars("hellooo");

function countOfChars_2(str) {
  return [...str].reduce((aggr, char) => (!aggr[char] ? { ...aggr, [char]: 1 } : { ...aggr, [char]: aggr[char] + 1 }), {});
}
console.log(countOfChars_2("hello"));

let s = "hello";
var result = [...s].reduce((a, e) => {
  a[e] = a[e] ? a[e] + 1 : 1;
  return a;
}, {});
console.log(result);

function countchar(str) {
  const Map = str.split("").reduce((aggr, val) => {
    if (aggr[val] === undefined) {
      aggr[val] = 1;
    } else {
      aggr[val]++;
    }
    return aggr;
  }, {});

  Object.keys(Map).forEach((key) => {
    console.log(`${key} : ${Map[key]}`);
  });
}

countchar("hello");
