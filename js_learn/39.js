//methods
// function inside object

var pers = {
  fname: "ashok",
  age: 10,
  about: function () {
    console.log(`this is  a funcation inside function , name : ${this.fname}`);
  },
};

pers.about();
console.log(pers);

//////////////////////////////
function info() {
  console.log(`this is  a funcation inside function , name : ${this.fname}`);
}
var pers = {
  fname: "ashok",
  age: 10,
  about: info,
};

var pers1 = {
  fname: "ashok1",
  age: 10,
  about: info,
};

var pers2 = {
  fname: "ashok2",
  age: 10,
  about: info,
};

pers.about();
pers1.about();
pers2.about();

///////////////////////

console.log(this);
console.log(window, window == this);

//////////////////////
//call()

var user3 = {
  fname: "ashok",
  age: 10,
  about: function () {
    console.log(this.fname, this.age);
  },
};

var user4 = {
  fname: "kumar",
  age: 20,
};

user3.about.call(user4);

user3.about.call(user3);
//////////////////////////////
function about() {
  console.log(this.fname, this.age);
}
var user14 = {
  fname: "prajapati",
  age: 40,
};
var user24 = {
  fname: "car",
  age: 50,
};

about.call(user14);
about.call(user24);

//////////////////
//bind

var ans = about.bind(user14);
ans();

////////
//apply
about.apply(user24);

// //////////////////////////

var user14 = {
  fname: "prajapati1111111111111111",
  age: 40,
  about: function () {
    console.log(this.fname, this.age);
  },
};

var asn = user14.about.bind(user14);
asn();
/////////////////////

// arrow function
var fname = "ashok";
var user14 = {
  fname: "pra222222222",
  age: 40,
  about: () => {
    console.log(this.fname, this.age);
  },
};

user14.about();

////////////////////////////
