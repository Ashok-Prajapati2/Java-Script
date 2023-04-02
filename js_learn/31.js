// callback function

function call(a) {
  console.log("hellow");
  a();
}

function newcall() {
  console.log("inside function");
}
call(newcall);

// function returning function

function newq() {
  function hellow() {
    console.log("hellow woard");
  }
  return hellow();
}

newq();

////////  higher order function ^
