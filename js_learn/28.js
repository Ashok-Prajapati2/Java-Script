// block scope vs function scope

// let and const are block scope
// var is function scope

{
  let firstname = "ashok"; //const
  console.log(firstname);
}
//   console.log(firstname)   // no exess outside
{
  var firstnames = "mohit";
  console.log(firstnames);
}

console.log(firstnames);

const firstname = "ramesh";
console.log(firstname);

////////////////////////////////////

if (true) {
  let firstnameif = "ashok";
  console.log(firstnameif);
}

// console.log(firstnameif);  // no exess outside
// var exess outside but let and const use only one

///////
