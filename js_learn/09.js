// undefine
let fname6;
var g;
// const j  // error
console.log(typeof (fname6, g));

// null
var a = null;
console.log(typeof a);
a = "ashok";
console.log(typeof a);

// BigInt
var numb = 123;
console.log(numb);

console.log(Number.MAX_SAFE_INTEGER);

var maxnum = BigInt(9007199254740991);
console.log(maxnum);

var maxnum = 90n; // this is BigInt
console.log(maxnum);

// console.log(maxnum + numb)  // this is error becouse number and BigInt oprestion is not allow

// booleans  //True & False
// comparision operator
var num1 = 5;
var num2 = 10;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);

var num1 = 2;
var num2 = "2";
console.log(num1 == num2);
console.log(num1 === num2);

// ==vs==
var num1 = 5;
var num2 = 5;
console.log(num1 != num2);
