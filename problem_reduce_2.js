let arr = [
  {
    name: "Joe",
    friends: [
      { name: "Susan", age: 12 },
      { name: "Jane", age: 43 },
      { name: "Susan", age: 33 },
    ],
  },
  {
    name: "Liz",
    friends: [
      { name: "Mila", age: 12 },
      { name: "Susan", age: 43 },
      { name: "Jane", age: 33 },
    ],
  },
  {
    name: "Mike",
    friends: [
      { name: "Susan", age: 12 },
      { name: "Susan", age: 43 },
      { name: "Susan", age: 33 },
    ],
  },
];

const getPersonWithMostFriendsByName = function (arr, name) {
  return arr
    .map((obj) => {
      return {
        name: obj.name,
        count: obj.friends.filter((obj) => {
          return obj.name === name;
        }).length,
      };
    })
    .reduce((aggr, obj) => {
      if (aggr === undefined) {
        return obj;
      }
      if (obj.count > aggr.count) {
        return obj.name;
      }
      return aggr;
    }, undefined);
};

console.log(getPersonWithMostFriendsByName(arr, "Susan"));
