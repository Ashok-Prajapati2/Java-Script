// static list vs live list
// const liitm = document.querySelectorAll(".todo-list li"); // static
// getelementby -----  // live
// const liitm = document.getElementsByTagName(".todo-list li")
// const nli = document.createElement("li");
// nli.textContent = "i6";

// const ul = document.querySelector(".todo-list");

// ul.append(nli);
// console.log(liitm)

//   how to get the dimension of element
// hight and width
// not work at tjis time // ????
// const sectodo = document.querySelectorAll(".todo-list");
// const info = sectodo.getBoundingClientRect();
// console.log(info)

// intro to event
// click
// button hower

// const btn = document.querySelectorAll(".btn-headline");
// console.log(btn);

// btn.onclick = function () {
//   console.log("clicked");
// };

// method  -- add event linser
// function clickme() {
//   console.log("clicked");
// }

// btn[0].addEventListener("click", clickme);

// for(const box of btn){
//     box.addEventListener("click",clickme)
// }

// this keyword

// btn[0].addEventListener("click", function () {
//   console.log("clicked");
//   console.log(this) // value is btn
// });

// btn[0].addEventListener("click", () => {
//   console.log("clicked");
//     //  console.log(this) // window
// });

// mustipal click

// const todo = document.querySelectorAll(".todo-list li");
// console.log(todo)

// for (const todos of todo) {
//   todos.addEventListener("click", function(){
//     // console.log("clicked");
//     console.log(todos.textContent)
//   });
// }

// for (let i = 0; i< todo.length ; i++) {
//     todo[i].addEventListener("click", function(){
//       // console.log("clicked");
//       console.log(todo[i].textContent)
//     });
//   }

// todo.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// });

// event object

// const todo = document.querySelectorAll(".todo-list li");

// for (const todos of todo) {
//   todos.addEventListener("click", (e) => {
//     // console.log("clicked");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);
//   });
// }


