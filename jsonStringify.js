function stringifyJSON(obj) {
  // undefined
  if (obj === undefined) return obj;
  // null
  if (obj === null) return "null";
  // number
  if (typeof obj === "number") {
    if (isNaN(obj)) {
      return "null";
    }
    return "" + obj;
  }
  // boolean
  if (typeof obj === "boolean") {
    return "" + obj;
  }
  // string
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  // array
  if (Array.isArray(obj)) {
    return (
      // [ "1","2","3","5", null, null ]
      "[" +
      obj
        .map((val) => {
          if (val === undefined) {
            return null;
          }
          return val;
        })
        .filter((val) => {
          return typeof val !== "function";
        })
        .map(stringifyJSON)
        .join(",") +
      "]"
    );
  }
  // object

  if (typeof obj === "object") {
    return (
      "{" +
      Object.keys(obj)
        .filter((key) => {
          return typeof obj[key] !== "function" && obj[key] !== undefined;
        })
        .map((key) => {
          return '"' + key + '":' + stringifyJSON(obj[key]);
        }) +
      "}"
    );
  }
}

console.log("Null:", stringifyJSON(null) === JSON.stringify(null));
console.log("NaN:", stringifyJSON(NaN) === JSON.stringify(NaN));
console.log("Number:", stringifyJSON(234) === JSON.stringify(234));
console.log("Boolean:", stringifyJSON(true) === JSON.stringify(true));
console.log("Undefined:", stringifyJSON(undefined) === JSON.stringify(undefined));
console.log("String:", stringifyJSON("Tiko") === JSON.stringify("Tiko"));
console.log("Array:", stringifyJSON([1, 2, 3]) === JSON.stringify([1, 2, 3]));
console.log("Object:", stringifyJSON({ id: 1 }) === JSON.stringify({ id: 1 }));

// const data = {
//   d: [1, 2, 3, undefined, 4],
//   a: null,
//   b: NaN,
//   c: undefined,
//   destination_addresses: ["Washington, DC, USA", "Philadelphia, PA, USA", "Santa Barbara, CA, USA", "Miami, FL, USA", "Austin, TX, USA", "Napa County, CA, USA"],
//   origin_addresses: ["New York, NY, USA"],
//   rows: [
//     {
//       elements: [
//         {
//           distance: {
//             text: "227 mi",
//             value: 365468,
//             isFar: true,
//           },
//           duration: {
//             text: "3 hours 54 mins",
//             value: 14064,
//           },
//           status: "OK",
//         },
//         {
//           distance: {
//             text: "94.6 mi",
//             value: 152193,
//           },
//           duration: {
//             text: "1 hour 44 mins",
//             value: 6227,
//           },
//           status: "OK",
//         },
//         {
//           distance: {
//             text: "2,878 mi",
//             value: 4632197,
//           },
//           duration: {
//             text: "1 day 18 hours",
//             value: 151772,
//           },
//           status: "OK",
//         },
//         {
//           distance: {
//             text: "1,286 mi",
//             value: 2069031,
//           },
//           duration: {
//             text: "18 hours 43 mins",
//             value: 67405,
//           },
//           status: "OK",
//         },
//         {
//           distance: {
//             text: "1,742 mi",
//             value: 2802972,
//           },
//           duration: {
//             text: "1 day 2 hours",
//             value: 93070,
//           },
//           status: "OK",
//         },
//         {
//           distance: {
//             text: "2,871 mi",
//             value: 4620514,
//           },
//           duration: {
//             text: "1 day 18 hours",
//             value: 152913,
//           },
//           status: "OK",
//         },
//       ],
//     },
//   ],
//   status: "OK",
// };

// console.log("Data: ", stringifyJSON(data) === JSON.stringify(data));

// const data = {
//   a: [1, 2, 3, undefined, 4],
//   b: null,
//   c: NaN,
//   d: undefined,
//   e: function foo() {
//     console.log("foo");
//   },
//   f: { id: 1 },
// };

// console.log(JSON.stringify(data));
