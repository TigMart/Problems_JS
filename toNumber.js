const toNumber = function (str) {
  let tmp = str.split("");
  let strToNum = tmp.map((val) => {
    return +val;
  });
  let newstr = [];
  for (let i = strToNum.length - 1, j = 0; i >= 0; --i, ++j) {
    newstr.push(strToNum[i] * 2 ** j);
  }
  return newstr.reduce((aggr, val) => {
    return aggr + val;
  });
};

const toNumber_rev = function (str) {
  return str
    .split("")
    .map((val) => {
      return +val;
    })
    .reverse()
    .map((val, i) => {
      if (val === 1) return Math.pow(2, i);
      return 0;
    })
    .reduce((aggr, val) => {
      return aggr + val;
    });
};

console.log(toNumber("101"));
