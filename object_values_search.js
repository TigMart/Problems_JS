function find(arr, searchText) {
  return arr.filter((obj) => {
    const values = Object.values(obj);
    for (let val of values) {
      if (("" + val).search(searchText) !== -1) {
        return true;
      }
    }
    return false;
  });
}

let arr = [
  { title: "White Fang", author: "Jack London" },
  { title: "The Adventures of Tom Sawyer", author: "Mark Twain" },
];
console.log(find(arr, "Twain"));
