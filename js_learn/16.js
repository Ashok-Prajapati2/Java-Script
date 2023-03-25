// break keyword

// continue keywoard

for (var i = 0; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (var i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// do while loop

var i = 10;
while (i <= 7) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 7);
console.log(i);
