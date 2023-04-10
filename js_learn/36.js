//sets (it is iterable)
// store data
// sets also have its own methods
// no index-based acess
// unique items only (no duplicates allowed)

// var numbers = [1,2,3]
var numbers = new Set([1, 3, "A"]);
numbers.add(["narr"]);
numbers.add(5);
var hi = [50];
numbers.add(hi);
console.log(numbers);

// console.log(numberp[1]) // no exxess

// for of looop

for (nn of numbers) {
  console.log(nn);
}

var ar = [1, 2, 3, 44, 5, 5, 4, 4, 8, 8];
var aee = new Set(ar);
console.log(aee);
