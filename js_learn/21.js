// array desteucturing

const myarr1 = ["a", "b"];
var myarr2 = myarr1[0];
console.log(myarr2);

var [, myarr3, myarr4] = myarr1;
console.log(myarr3, myarr4);

const myarr5 = ["a", "b", "c", "d"];
var myarr = myarr5.slice(2);
console.log(myarr)


var [myarr3, myarr4 , ...newarr] = myarr;
console.log(myarr3, myarr4 , newarr);