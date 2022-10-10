const isUnique = function isU(str) {
  isU.chars = isU.chars ?? {};
  for (let i = 0; i < str.length; ++i) {
    const char = str[i];
    if (isU.chars[char]) return false;
    isU.chars[char] = true;
  }
  return true;
};

console.log(isUnique("hello"));
