// How Many Days Between
let a = new Date("July 8, 2020");
let b = new Date("July 9, 2021");
function HowManyDays(a, b) {
  return (b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24);
}
console.log(HowManyDays(a, b));
