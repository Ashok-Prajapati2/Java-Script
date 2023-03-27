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

function sum1(a, b) {
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
console.log(sumTo(100));

//input number

function even(n) {
  if (n % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

var n = prompt("number");
even(n);

///

function firstc(string) {
  return string[0];
}

console.log(firstc("Ashok"));

function find(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

var myarr56 = [1, 2, 3, 5, 9];

var res = find(myarr56, 9);
console.log(res);

///////function expression

function gmorning() {
  console.log("Good Morning ASHOK ....... ");
}

var sin = function () {
  console.log("Good Morning ASHOK ....... ");
};

gmorning();
sin();

////////////////

// arrow function

const gmorningarrow = () => {
  console.log("Good Morning ASHOK ....... ");
};

gmorningarrow();
//
const isodd = (number) => number % 2 == 0;
console.log(isodd(10))

///
