// function Foo(name, surname) {
//  this.name = name;
//  this.surname = surname;

// }

// const x = new Foo("Artak", "Haruty");
// console.log(x);

// "use strict"

// function foo() {
//  console.log(this.a);
// }

// const obj = {
//  a: 1,
//  f: foo,
// }

// obj.f;

// function foo() {
//   this.a = x;
//   console.log(this.a);
// }

// var obj1 = {
//   a: 2,
//   foo: foo,
// };

// var obj2 = {
//   a: 3,
//   foo: foo,
// };

// foo(); // Default Binding // Print -> Qani vor non strict mode rejimum enq

// obj1.foo(); //Implicit Binding
// obj2.foo(); //Implicit Binding

// obj1.foo.call(obj2); // Explicit Binding // 3
// obj2.foo.call(obj1); // Explicit Binding // 2

/// 1. Default Binding ++++++
/// 2. Implicit Binding ++++++
/// 3. Explicit Binding +++ Call Apply Bind
/// 4. New Binding ++

// const bind = function (f, object) {
//   return function () {
//     return f.apply(object, arguments);
//   };
// };

// function foo() {
//   console.log(this.a);
// }

// var obj1 = {
//   a: 3,
//   foo: foo,
// };

// let x = bind(foo, obj1);
// x();

// const obj = {
//   f: function () {
//     // this
//     [1, 2, 3, 4].forEach(function (val) {
//       console.log(this);
//     });
//   },
// };
// obj.f();

// function foo() {
//   [1, 2, 3].forEach((val) => {
//     console.log(this);
//   });
// }
// foo();

// function y() {
//   console.log(this);
// }
// let ob2 = {
//   a: 6,
//   y: y,
// };
// ob2.y();

// let x = (x) => console.log(this);
// let ob = {
//   a: 5,
//   x: x,
// };
// ob.x();

// obj.f();

// let Person = {
//   name: "Tigran",
//   surName: "Martirosyan",
//   foo: function () {
//     console.log(`Hello ${this.surName}`);
//   },
// };

// console.log(new Bar(4));
// function Bar(x) {
//   this.x = x * 2;
// }

// let foo = new Bar(2);
// console.log(foo);

function foo(arr) {
  let arr1 = [];
  arr1 = arr.map((el) => -1 * el);
  let m = arr1[1] - arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if ((arr[j] = arr[i] > m)) {
        m = arr[j] - arr[i];
      }
    }
  }
  return m;
}

let arr = [-1, 4, 10, 3, -2];
console.log(foo(arr));
