// const sectodo = document.querySelector(".section-todo")
// console.log(sectodo.classList)
// sectodo.classList.add(`bg-dark`)
// sectodo.classList.remove(`container`)

// const ans = sectodo.classList.contains("container")
// console.log(ans)

// sectodo.classList.toggle("bg-dark")
// sectodo.classList.toggle("bg-dark")

// const heder = document.querySelector(".header")
// console.log(heder.classList)
// heder.classList.add("bg-dark")

// const toolist = document.querySelector(".todo-list")
// console.log(toolist.innerHTML)
// toolist.innerHTML += "<li>hi</li>"

// const newtodo = document.createElement("li");
// const newtext =  document.createTextNode("hi this is new text")
// newtodo.append(newtext)
// console.log(newtodo.innerHTML , newtext)

// const todolist = document.querySelector(".todo-list")
// todolist.append(newtodo)
// todolist.prepend(newtodo)
// console.log(todolist.innerHTML)

//before // after

// const newtodo = document.createElement("li");
// const newtext =  document.createTextNode("hi this is new text")
// const todolist = document.querySelector(".todo-list")
// newtodo.append(newtext)
// todolist.after(newtodo)

// elem.insertAdjacentHTML(where , html)
// beforebegin
// afterbegin
//beforeend
// afterend

// const unli = document.querySelector(".todo-list")
// unli.insertAdjacentHTML("beforeend","<li>This is todo </li>")
// unli.insertAdjacentHTML("afterend","<li>This is todo </li>")
// unli.insertAdjacentHTML("beforebegin","<li>This is todo </li>")
// unli.insertAdjacentHTML("beforebegin","<li>This is todo </li>")

// const unli = document.querySelector(".todo-list")
// const newli = document.createElement("li")
// newli.textContent = "new text add"
// const clone = newli.cloneNode(true)
// unli.append(newli)
// unli.prepend(clone)

// some old methods to support poor IE

//  appendChild;
// insentBefore;
// replaceChild
// removeChild

// check errer next time
// const ul = document.querySelectorAll(".todo-list");
// const li = document.createElement("li");
// const re = document.querySelectorAll(".first-todo")
// li.textContent = "this is text add in too list ";
// ul.replaceChild(li , re);


