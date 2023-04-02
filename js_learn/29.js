// default parameter

function addtwonum(a = 0, b = 0) {
  return a + b;
}

const ans = addtwonum(4);
console.log(ans);

//rest paremeters

function myFun(a, b, ...c) {
  console.log(a, b, c);
}

myFun(4, 6, 5, 65, 56, 56);

function adda(...n) {
  console.log(n);
  let total = 0;
  for (nsf of n) {
    total = total + nsf;
  }
  console.log(total);
  return total;
}
const ansf = adda(1, 5, 8, 5);
console.log(ansf);

