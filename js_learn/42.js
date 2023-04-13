//new keywoed
//constuctor function
// important

function Userdata(fname, age) {
  this.fname = fname;
  this.age = age;
}
Userdata.prototype.about = function () {
  console.log(this.fname);
};
var thiss = new Userdata("Ashok", 10);
console.log(thiss);
thiss.about();

for (var key in thiss) {
  console.log(key);
  console.log("//////////////////////////////");
  if (thiss.hasOwnProperty(key)) {
    console.log(key);
  }
}

//prototype
var numberss = [1, 2, 3, 4]; //this is same belllow
var numberss = new Array(1, 2, 3, 4);
console.log(numberss);
console.log(Array.prototype);
console.log(Userdata.prototype);

///////////////

// class
class users {
  constructor(fname, lastname, email, age) {
    //   const user = {};
    const user = Object.create(users.prototype);
    this.fname = fname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
  }

  about() {
    return `${fname}`;
  }
}

// var user1 =  users("ashok", "kumar", "aky", 12)  // errer because new keywoed
var user1 = new users("ashok", "kumar", "aky", 12);
console.log(user1);

///////////////////////////////////////////////

//class

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name}, = grass`;
  }
}
// sub class
class animal1 extends animal {}

var tomy = new animal1("tommy", 10);
console.log(tomy);

var monkey = new animal("monkey", 25);
console.log(monkey.eat, monkey);

//////////////////
class animal2 extends animal {
  constructor(name, age, speet) {
    super(name, age);
    this.speet = speet;
  }
  run() {
    console.log(`tomy is run ${speet}`);
  }
}

var tomy = new animal2("cat", 10, 20);
console.log(tomy);
console.log(tomy.run);
