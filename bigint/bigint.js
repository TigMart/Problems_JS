class Bigint {
  constructor(number) {
    this.number = [];
    if (number) {
      for (let i = 0; i < number.length; ++i) {
        this.number.push(+number[i]);
      }
    }
  }

  add(first, second) {
    if (!(first && first.length && second && second.length)) {
      return "";
    }
    let str = "";
    let carry = 0;
    let i = 0;
    let j = 0;
    for (i = first.length - 1; i >= 0 && j >= 0; ) {
      for (j = second.length - 1; j >= 0 && i >= 0; ) {
        let sum = Math.floor((first[i] + second[j] + carry) % 10);
        carry = (first[i--] + second[j--]) / 10;
        str += "" + sum;
      }
    }
    while (j >= 0) {
      str += "" + Math.floor((second[j--] + carry) % 10);
      carry = second[j] / 10;
    }
    while (i >= 0) {
      str += "" + Math.floor((first[i--] + carry) % 10);
      carry = first[i] / 10;
    }

    return str.split("").reverse().join("");
  }
}

let a = new Bigint("12");
let b = new Bigint("12");
let result = a.add(a.number, b.number);
console.log(result);
