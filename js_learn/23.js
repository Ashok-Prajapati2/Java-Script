// loops in objects
// for in loop
//object.keys

const person2 = {
  name: "person",
  age: 15,
  arrays: [1, 2, 3],
};

for (var key in person2) {
  console.log(person2[key]);
  console.log(`${key} : ${person2[key]}`); // imp       ==  again highlight
  console.log(key, ":", person2[key]);
}

//

console.log(Object.keys(person2));
console.log(Array.isArray(Object.keys(person2)));

// for of loop
for (var key of Object.keys(person2)) {
  console.log(key, ":", person2[key]);
}

// computed properties

var key = "Name";
var value = "ASHOK";

//
const obj1 = {
  [key]: value,
};
console.log(obj1);

//

const obj2 = {};
obj2[key] = value;
console.log(obj2);

// spread operator

var arr5 = [1, 22];
var arr6 = [2, 63, 12];

var new_arr = [...arr5, ...arr6, ..."abcd"];
console.log(new_arr);

//
const obj01 = {
  key10: "name",
  key20: "age",
};

const obj02 = {
  key30: "ashok",
  key31: 18,
};

const nnobj = { ...obj01, ...obj02, key66: "new key", ..."abcd" };
console.log(nnobj);
