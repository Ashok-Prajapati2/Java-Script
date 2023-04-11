// Maps

// map is aterables
// stoer data in ordered fashion

// store key value pair(like object)
// duplicate keys are not allowed likes objects

// different between  maps and objects

//objjects can only have string or symbol
// as key

// in maps you can anything as key
// like array , number ,string

var persion = {
  fname: "ashok",
  age: 10,
  1: "one",
};
console.log(persion.fname);
console.log(persion["fname"]);

for (let key in persion) {
  console.log(typeof key);
}

//map

var newmap = new Map();
newmap.set("fname", "ashok");
newmap.set("age", 10);
newmap.set(1, "one");

console.log(newmap);
console.log(newmap.get("age"));

for (let key of newmap.keys()) {
  console.log(key, typeof key);
}
var p1 = {
  id: 1,
  fname: "ashok",
  // age : 15
};
var newmapa = new Map();

newmapa.set(p1, { age: 15, gender: "male " });

console.log(newmapa, p1);

console.log(p1.id, newmapa.get(p1).age);
