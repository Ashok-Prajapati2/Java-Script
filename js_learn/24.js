// object destructing
var band = {
  "usern": "ASHOK",
  age20: 18,
  year: 2023,
};
var band1 = band.usern;
console.log(band1);

const { usern, age20, ...rest } = band;
console.log(usern, age20, rest);

var { year } = band;
console.log(band);

//object inside ayyays

 const usersinfo = [
  {
    userid: 01,
    namesp: "ashok",
    gender: "mal// object destructinge",
  },
  {
    userid: 02,
    namesp: "kumar",
    gender: "male",
  },
  {
    userid: 03,
    namesp: "prajapati",
    gender: "male",
  },
];

for (var user30 of usersinfo) {
  console.log(
    "user data : ",
    user30.userid,
    ",",
    user30.namesp,
    ",",
    user30.gender
  );
}

// nested destructuring

const [user1, user2, { userid: user }] = usersinfo;
console.log(user1, user2.gender, ";", user);
