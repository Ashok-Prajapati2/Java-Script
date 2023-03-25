//arrays
//reference type = object
// how to create arrays
// array indexing

// array is ordered collection of items

var fruits = ["appple", "mango", "grapes"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits[0]);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, "apple", null, [1, 2, 3]];
console.log(numbers[10]);

console.log(typeof fruits);
console.log(Array.isArray(fruits));

// array push pop
// array shift unshift
var fruits = ["appple", "mango", "grapes"];
console.log(fruits);
// push
fruits.push("banana");
console.log(fruits);

var p = fruits.pop(); //remove
console.log(p);
console.log(fruits);

fruits.unshift("banana"); // unshift
console.log(fruits);

fruits.shift();    //shift
console.log(fruits);
