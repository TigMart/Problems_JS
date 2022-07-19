const cars = ["Tesla", "Opel", "Mercedes-Benz", "lada"];

// for in
// for of

// const obj = {
//   id: 1,
//   name: "Tigran",
//   age: 68,
// };

// for (let i in obj) {
//   console.log(i);
// }

// for (let [k, v] of Object.entries(obj)) {
//   console.log(k, v);
// }

// for (let car in cars) {
//   if (car === "2") continue;
//   console.log(cars[car]);
// }
// for (let car of cars) {
//   if (car === "lada") continue;
//   console.log(car);
// }

let obj2 = {
  name: "Tiko",
  age: 26,
};

let a = JSON.stringify(obj2);
console.log(a, typeof a);
let b = JSON.parse(a);
console.log(b, typeof b);
console.log(b.name);
