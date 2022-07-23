let obj = {
  firstName: "Michael",
  lastName: "Jackson",
};

function swap(obj) {
  return Object.keys(obj).reduce((aggr, key) => {
    aggr[obj[key]] = key;
    return aggr;
  }, {});
  
  // let newObj = {};
  // keys.forEach((key) => {
  //   const value = obj[key];
  //   newObj[value] = key;
  // });
  // return newObj;
}

console.log(swap(obj));
