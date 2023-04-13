//getter and setters
// ???????????????? error check again

class persion0 {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  get fullname() {
    return `${this.fname} ${this.lname}`;
  }
  set fullname(fullname) {
    var [fname, lname] = fullname.split("");
    this.fname = fname;
    this.lname = lname;
  }
  setname(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}
var p1 = new persion0("ASHOK", "KUMAR", 20);
console.log(p1);
console.log(p1.fullname); // output is ASHOK KUMAR  to get keyword
////
console.log(p1.fname);
p1.setname("mohit", "prajapati");
console.log(p1);
//
// p1.fullname = "Ramesh ram "
// console.log(p1.fullname ) // Ramesh ram
p1.fullname = "Ramesh kumar"; //???????????????
console.log(p1); // Ramesh ram
