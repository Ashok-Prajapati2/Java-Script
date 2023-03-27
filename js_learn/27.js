// function inside function

var app = () => {
  var fun1 = () => {
    console.log("inside 1st");
  };
  fun1();
  var addnum = (a, b) => {
    console.log(a + b);
  };
  addnum(10, 2);

  console.log("inside app");
};

app();

// lexical scope

const myval = "v1";
function myapp2() {
  const myval = "v1"; // comment this  variable than run outside variable myvar
  var fun = () => {
    const myval = "v2"; // comment this  variable than run outside variable myvar
    console.log("inside 10st", myval);
    app();
  };

  const f1 = () => {};
  f1();
  console.log(myval);
}

myapp2();
