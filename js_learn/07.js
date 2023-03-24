//string

let fname = "   ashok    "; // how can remove space
console.log(fname.length);
fname = fname.trim();
console.log(fname.length);

fname = fname.toUpperCase();
console.log(fname);
console.log(fname.toLowerCase());

// remove word

let news = "ASHOKk";
let news1 = news.slice(0, 5);
console.log(news1);
