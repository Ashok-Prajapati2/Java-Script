// function == object
// it is imp 
function hellow() {
  console.log("hellow");
}
hellow.obj = "very important";
console.log(hellow.obj);

//  prototype exist  only function
console.log(hellow.prototype);

hellow.prototype.abc = "abc";
console.log(hellow.prototype);

//////////////////////////

function users(fname, lastname, email, age) {
//   const user = {};
  const user  = Object.create(users.prototype)
  user.fname = fname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;

  //   user.about = abouts.about;
  return user;
}
var users1 = users("ashok", "kumar", "aky", 12);
var users2 = users("ashok", "kumar", "aky", 12, "about this");
var users3 = users("ashok", "kumar", "aky", 12, "about this");
var users4 = users("ashok", "kumar", "aky", 12, "about this");

users.prototype.about = function () {
  return `${fname}`;
};
console.log(users1);
console.log(users2);
console.log(users2);
console.log(users3);
console.log(users2.about);
