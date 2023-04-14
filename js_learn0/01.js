// how to js wprk // part 2

//compilation
// code execution

// why compilation
// how js code executes
// what is global exection context?
// what is local execution context?

console.log(this);
// console.log(window);
console.log(fname);
var fname = "Ashok";
console.log(fname);

/////////////////////////

// hosting

console.log(this);
// console.log(window);
console.log(myfun);
console.log(lname);
myfun();
console.log(myFunction);

//function declartion

function myfun() {
  console.log("function inside code");
  console.log(arguments);
}

// function expression
var myFunction = function () {
  console.log("function2");
};

//

var lname = "kumar";
var fullname = fname + " " + lname;
console.log(fullname);

/////////////
// console.log(fname1); // errer this  code becuase let not define before
let fname1 = "Ashok";
// const fname1 = "Ashok"; // same work as let
console.log(fname1);
///////////////////.

// closures
// function can return function

function outerfun() {
  function innerfun() {
    console.log("hellow word !");
  }
  return innerfun;
}

var ans = outerfun();
console.log(ans);
ans();

//////////////////////////////////////

function pname(fname, lname) {
  function innerfun() {
    console.log(fname, lname);
  }
  return innerfun;
}

var ans = pname("Ramesh", "KUMAR");
console.log(ans);
ans();

///////////////////////

function power(p) {
  return function (n) {
    return n ** p;
  };
}

var cube = power(2);
var ans = cube(5);
console.log(ans);

/////////////////
