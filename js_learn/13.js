// nested if else

var winingnum = 20;
// var usernum = prompt("guess a number");
var usernum = 20;
usernum = Number(usernum);
console.log(typeof usernum);

if (usernum === winingnum) {
  console.log("you win");
} else {
  if (usernum > winingnum) {
    console.log("please enter a lower number");
  }
  if (usernum < winingnum) {
    console.log("please enter a highir number");
  }
}

// else if

var temp = 10;

if (temp < 0) {
  console.log("0");
} else if (temp < 10) {
  console.log("10");
} else if (temp < 30) {
  console.log("30");
} else if (temp < 50) {
  console.log("50");
} else {
  console.log("very hot");
}
