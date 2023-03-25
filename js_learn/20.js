//loop in array
//for loop

var itm = ["a", "b", "c", "d"];
var len = itm.length;

for (var i = 0; i < len; i++) {
  console.log(itm[i].toUpperCase());
}

var itm = ["a", "b", "c", "d"];
var itm2 = [];
for (var i = 0; i < len; i++) {
  console.log(itm2.push(itm[i]));
  console.log(itm2);
}

// use const for creating array

const app = ["a", "b"]; // mostly use const
// app =["h"]  no change in array
app.push("c");
console.log(app);

// while loop

const app1 = ["a", "b", "c", "d"];
var i = 0;
while (i < app1.length) {
  console.log(app1[i]);
  i++;
}

//for of loop

for (var aps1 of app1) {
  console.log(aps1.toUpperCase());
}

//for in loop

for (var aps1 in app1) {
  console.log(aps1[app1]);
}
