//find method
var myarrv = ["hi0", "cat", "goat", "dog"];

function islength(string) {
  return string.length == 4;
}
var is = islength(myarrv);
console.log(is);

var its = myarrv.find(islength);
console.log(its);

var uuser = [
  { id: 10, n: "asd" },
  { id: 20, n: "asdp" },
  { id: 30, n: "asjdl" },
  { id: 40, n: "asdkk" },
];

var myuuser = uuser.find((user) => {
  return user.id === 20;
});
console.log(myuuser);

///////////////////////////

//every method

var numbers = [2, 4, 6, 8, 46, 10, 0, 2];
var is = numbers.every((number) => {
  return number % 2 == 0;
});

console.log(is);

///

var uuser = [
  { id: 10, n: "asd" },
  { id: 20, n: "asdp" },
  { id: 30, n: "asjdl" },
  { id: 50, n: "asdkk" },
];

var ans = uuser.every((itm) => {
  return itm.id < 50;
});

console.log(ans);
//////

//some method

var numbers = [3, 5, 2, 7];
var ans = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(ans);

var uuser = [
  { id: 10, n: "asd" },
  { id: 20, n: "asdp" },
  { id: 30, n: "asjdl" },
  { id: 40, n: "asdkk" },
];
var ans = uuser.some((itm) => {
  return itm.id > 40;
});

console.log(ans);

//////////
// fill method

var arrrn = new Array(10).fill(-1);
console.log(arrrn);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ans = numbers.fill(0, 1, 6);
console.log(ans);

//////////

// splice method

var numbers = ["A", "B", "C"];
// delete

var ans = numbers.splice(0, 1, "As", "110122");

console.log(numbers, ans);
