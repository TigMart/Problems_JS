// Solution 1
const substr = (str, substr) => {
  if (typeof str !== "string" || typeof substr !== "string")
    throw new Error("Pass arguments of type string");

  if (str.length === 0 && substr.length === 0) return 0;

  const size = str.length - substr.length + 1;
  for (let i = 0; i < size; ++i) {
    let j = 0;
    for (; j < substr.length; ++j) {
      if (str[i + j] !== substr[j]) break;
    }
    if (j === substr.length) return i;
  }
  return -1;
};


// Solution 2
const substr2 = (str, substr) => {
  if (typeof str !== "string" || typeof substr !== "string")
    throw new Error("Pass arguments of type string");
  if (str.length === 0 && substr.length === 0) return 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === substr[0]) {
      if (str.slice(i, i + substr.length) == substr) return i;
    }
  }
  return -1;
};

console.log(substr("hello", "lo"));
