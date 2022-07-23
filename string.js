let a = "Hello World";

console.log(a.split(""));

function nameToUpper(name) {
  return name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase();
}

console.log(nameToUpper("tikO"));

function foo(name) {
  let names = name.split(" ");
  let upperNames = names.map(function (val) {
    return val.substring(0, 1).toUpperCase() + val.substring(1, name.length).toLowerCase();
  });
  return upperNames.join(" ");
}

console.log(foo("tigran vahan martirosyan"));

let str = "Who is the bomb bomb";
let str1 = str.replaceAll("bomb", "best person ever");
console.log("str1: ", str1);

let str3 = "This person wnet to the store and purchased a car :)";

console.log("~", str3.search("store"));
