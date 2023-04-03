// important array methods

// forEach
//map ***
// filter
// reduce

const numb = [4, 5, 4, 2, 5, 2];

function numbs(numb, index) {
  console.log(index, "number is", numb * 10);
}
// console.log(numb.length);
// for (var i = 0; i < numb.length; i++) {
//   numbs(numb[i], i);
// }

numb.forEach(numbs); // same work this commend

numb.forEach(function (index, num) {
  for (var i = 0; i < 10; i++) {
    console.log(num ** 2, index * 2);
    console.log("hellow");
  }
});

var users = [
  { firstname: "ASHOK", age: 10 },
  { firstname: "kumar", age: 10 },
  { firstname: "ASHOK", age: 10 },
  { firstname: "Ashok kumar", age: 10 },
];
users.forEach(function (user, index) {
  console.log(user.firstname, "::", user.age, "::", index);
});

////////////////////////

//map

var umbm = [1, 2, 3, 4, 5, 6];
var mfuna = (numbsa, index) => {
  return `index : ${index}, number : ${numbsa * numbsa}`;
};

var square = umbm.map(mfuna);
console.log(square); // return array

// filter

var numbs = [1, 2, 3, 4, 5];
var isEven = function (numbsw) {
  return numbsw % 2 == 0;
};
var filter = numbs.filter(isEven);
console.log(filter);

// reduce

var sum = numbs.reduce((a, c) => {
  return a + c;
});

console.log(sum)