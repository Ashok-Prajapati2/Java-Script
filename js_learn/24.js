// object destructing
var band = {
  names: "ASHOK",
  age: 18,
  year: 2023,
};
var band1 = band.name;
console.log(band1);

const { names, age, ...rest } = band;
console.log(names, age, rest);

var { year } = band;
console.log(band);

//object inside ayyays

const usersinfo = [
  {
    userid: 01,
    name: "ashok",
    gender: "mal// object destructinge",
  },
  {
    userid: 02,
    name: "kumar",
    gender: "male",
  },
  {
    userid: 03,
    name: "prajapati",
    gender: "male",
  },
];

for (var user30 of usersinfo) {
  console.log(
    "user data : ",
    user30.userid,
    ",",
    user30.name,
    ",",
    user30.gender
  );
}

// nested destructuring

const [user1, user2, { userid: user }] = usersinfo;
console.log(user1, user2.gender, ";", user);
