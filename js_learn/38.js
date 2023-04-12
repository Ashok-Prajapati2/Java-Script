//clone using Object.assign
//memory

var obj = {
  key1: "v1",
  key2: "v2",
};

var obj1 = obj;

obj.key3 = "v3";

console.log(obj1, obj);

var obj1 = { ...obj };
obj.key4 = "v4";
console.log(obj1, obj);

// clone 2nd method

var obj1 = Object.assign({}, obj);
console.log(obj1, obj);

// optional chaining

var obj = {
  key1: "v1",
  key2: "v2",
  fname: "ashok",
  //address: { houseno: 10 },
};

//console.log(obj.key1, obj.address.houseno);
console.log(obj.key1, obj?.address?.houseno); //.?
