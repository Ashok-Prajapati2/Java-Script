// change text
//  textconstent and innerText

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent) // all text select
// console.log(mainHeading.innerText) // only unhide text select
// mainHeading.textContent = "This is text change"; // provide text

//change the style
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "white";
// mainHeading.style.color = "red";
// mainHeading.style.border = "5px solid blue";

//get and set attrubutes
// const link = document.querySelector("a")
// console.log(link.getAttribute("href"))
// link.setAttribute("href" ,"https://google.com")
// console.log(link.getAttribute("href"))

// //  get multiple elements using getElements by class name
// get multiple element element items using querySelectorAll

// const nav = document.getElementsByClassName("nav-item")  // html collection
// // console.log(nav)

// const nav = document.querySelectorAll(".nav-item") // node list
// console.log(nav[1])

// loop
//// for loop
// for of loop

// const nav = document.getElementsByClassName("nav-item"); // html collection
// const nava = document.getElementsByTagName("a");
// console.log(nav.length);

// for (let i = 0; i < nav.length; i++) {
//   const navs = nav[i];
//   navs.style.backgroundColor = "aqua";
// }

// for (let i = 0; i < nava.length; i++) {
//   const navs = nava[i];
//   navs.style.fontweight = "bold";
//   navs.style.color = "black";
//   navs.style.padding = "8px"
// }

// for(let navs of nav){
//     navs.style.backgroundColor = "blue";
// }

// const arr = Array.from(nav)
// console.log(Array.isArray(arr))

// const nav = document.querySelectorAll(".nav-item") // node list
//// for loop
// for of loop
// for each method
// for (let i = 0; i < nav.length; i++) {
//   const navs = nav[i];
//   navs.style.backgroundColor = "aqua";
// }

// for(let navs of nav){
//     navs.style.backgroundColor = "blue";
// }

// nav.forEach((navs)=>{
//     navs.style.backgroundColor = "blue";
// })
