function spaces(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += " ";
  }
  return str;
}

function stars(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
  }
  return str;
}

function diamond(height) {
  let str = "";
  let topSpaces = height / 2 - 1;
  for (let i = 1; i <= height; i += 2) {
    str += spaces(topSpaces) + stars(i) + "\n";
    topSpaces--;
  }
  let bottomSpaces = 1;
  for (let j = height - 2; j > 0; j -= 2) {
    str += spaces(bottomSpaces) + stars(j) + "\n";
    bottomSpaces++;
  }
  return str;
}

console.log(diamond(3));
