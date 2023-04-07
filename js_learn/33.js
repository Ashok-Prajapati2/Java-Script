//sort method

//5,6,10,2,11,1
// sort = 1,2,5,6,10,11

var numbr = [1, 2, 5, 6, 10, 11];
numbr.sort();
console.log(numbr);
// output = Array(6) [ 1, 10, 11, 2, 5, 6 ]

var usern = ["ashok", "acn", "prt", "cakp", "Aashok"];
usern.sort();
console.log(usern);
// output = Array(5) [ "Aashok", "acn", "ashok", "cakp", "prt" ]

numbr.sort((a, b) => {
  return a - b; // b-a;
});
console.log(numbr);
// output = Array(6) [ 1, 2, 5, 6, 10, 11 ]

var pro = [
  { pnmae: 1, id: 10, price: 100 },
  { pnmae: 2, id: 20, price: 500 },
  { pnmae: 3, id: 30, price: 200 },
  { pnmae: 4, id: 40, price: 1000 },
  { pnmae: 5, id: 50, price: 50 },
];

var prolow = pro.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(prolow);
