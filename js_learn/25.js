// function

function gmorning() {
  console.log("Good Morning ASHOK ....... ");
}

gmorning();

function sum() {
  console.log(2 + 5);
  return 2 + 4;
}

sum();
console.log(sum());

// ===============

function sum1(a,b) {
  return a + b;
}
console.log(sum1(10, 1));

// ================

  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
console.log(sumTo(100))
  

//input number

function even(n){
    if(n%2 == 0){
        console.log("even")
    }
    else{
       console.log("odd")
    }
}

var n = prompt("number");
even(n);