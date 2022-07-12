// first way
let a = 5;
let b = 10;
console.log("Befor SWAP :", a, b);
[a, b] = [b, a];
console.log("After SWAP :", a, b);

// Second way
let c = 5;
let d = 10;
console.log("Befor SWAP :", c, d);
temp = c;
c = d;
d = temp;
console.log("After SWAP :", c, d);

// Third way
let n = 5;
let m = 10;
console.log("Befor SWAP :", n, m);
n = n + m;
m = n - m;
n = n - m;
console.log("After SWAP :", n, m);

// fourth way
let x = 5;
let y = 10;
console.log("Befor SWAP :", x, y);
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log("After SWAP :", x, y);
