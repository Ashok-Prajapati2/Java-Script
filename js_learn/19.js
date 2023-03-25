// how to clone array
// how to concatenate two arrays

var a1 = ["itm1", "itm2"];
var a2 = a1;
console.log(a1 === a2);

var a1 = ["itm1", "itm2"];
var a2 = ["itm1", "itm2"];
console.log(a1 === a2); // both are defirent

// use this metherd

var a1 = ["itm1", "itm2"];
var a2 = a1.slice(0);
console.log(a1 === a2);

// new way
var a1 = ["itm1", "itm2"];
var a2 = [...a1];
console.log(a1 === a2);

console.log(a1, a2);
a2.push("itm3");
console.log(a2, a1);

//------
var a1 = ["itm1", "itm2"];
var a2 = [...a1, "itm3", "itm4"];
console.log(a1, a2);
