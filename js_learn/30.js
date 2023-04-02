//parameter destruturing

// object
// react

var preson11 = {
  firstname: "Ashok",
  age: 18,
};

function print(obj) {
  console.log(obj.firstname);
  console.log(obj.age);
  console.log(obj.gender);
}

print(preson11);

function print1({ firstname, age, gender }) {
  console.log(firstname);
  console.log(age);
  console.log(gender);
}

print1(preson11);
