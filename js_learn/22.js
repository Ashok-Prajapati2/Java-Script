//objects
//array are good but not sufficient
//for real world data
// objects store key value pairs
//object don't  have index
// how to access data from objects
// how to add key  value pair to objects

// objects
const person = { name: "Ashok", age: 18 };
console.log(typeof person);

console.log(person, person.name);

// array in obj
const person1 = {
       "name" : "person",
       age : 15,
       arrays : [1,2,3]
};

console.log(person1, person1.arrays)

person1.gender = "male"
console.log(person1)
console.log(person1["name"])

var add = "email"
person1[add] = "@gmail.com"
console.log(person1)




