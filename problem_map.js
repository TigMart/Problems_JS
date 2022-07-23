let transform = [
  { fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
  { fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
  { fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
  { fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" },
];

let transformArrayObj = function (arr) {
  return arr
    .filter((obj) => {
      if (obj.gender === "female") {
        return obj;
      }
    })
    .map((obj) => {
      return {
        firstName: obj.fn,
        lastName: obj.ln,
        phone: obj.ph,
        gender: obj.gender,
      };
    });
};

console.log(transformArrayObj(transform));
