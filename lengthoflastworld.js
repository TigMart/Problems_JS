var lengthOfLastWord = function (s) {
  let arr = s.split(" ").filter((val) => val != "");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

// function foo(str) {
//   str = str.trim().split(" ");
//   return str[str.length - 1].length;
// }

// console.log(foo("   fly me   to   the moon  "));
