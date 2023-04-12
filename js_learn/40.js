//proto , {prototype}

// in this file a errer , check next time again  (about function )

var user1 = {
  fname: "ashok",
  age: 10,
  about() {
    console.log(this.fname);
  },
};

user1.about();

// make a function for  make more obj
var abouts = {
  about: function () {
    console.log(`${fname}`);
  },
};
function users(fname, lastname, email, age) {
  const user = {};
  user.fname = fname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.about = abouts.about;
  return user;
}

var users1 = users("ashok", "kumar", "aky", 12);
var users2 = users("ashok", "kumar", "aky", 12, "about this");
var users3 = users("ashok", "kumar", "aky", 12, "about this");
var users4 = users("ashok", "kumar", "aky", 12, "about this");
console.log(users1);
console.log(users2);
console.log(users2);
console.log(users3);
console.log(users1.about);

///////////////////////////////////////////////////////////

var obj9 = {
  key1: 1,
  key2: 2,
};
var obj8 = Object.create(obj9);
console.log(obj8);
obj8.key3 = 3;
// obj8.key1 = 10;
console.log(obj8, obj8.key1);
console.log(obj8.__proto__); // proto

////////////////////////////////////////////////////////
