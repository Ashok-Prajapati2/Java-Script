// data type
// primitve vs reference data types
// primitve
var num1 = 2;
var num2 = num1;
console.log(num1, num2);
num1++;
console.log(num1, num2);

//reference
// --arrays
var array1 = ["i1", "i2"];
var array2 = array1;
console.log(array1, array2);

array3 = array1.push("i3");

console.log(array1, array2);


