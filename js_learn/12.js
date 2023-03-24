// ternary operator
var val = 12;
var val2 = "";

if (val <= 10) {
  val2 = "1";
} else {
  val2 = "2";
}

console.log(val2);

// ternary operator / conditional operator

var age1 = 12;
let drink = age1 <= 8 ? "you can drink milk" : "you can drink coffee"; //   T : F
console.log(drink);

// and or operator

var name1 = "Ashok";
var age1 = 2;
if (name1[0] === "A" && age1 < 20) {
  // both condication should be true  //  and operator
  console.log("you are lucky");
} else {
  console.log("your name start with " + name1[0]);
}

var name1 = "Ashok";
var age1 = 22;
if (name1[0] === "A" || age1 < 20) {
  // only one condication should be true // or operator
  console.log("you are lucky");
} else {
  console.log("your name start with " + name1[0]);
}
