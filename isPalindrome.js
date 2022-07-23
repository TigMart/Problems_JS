var isPalindrome = function (str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
