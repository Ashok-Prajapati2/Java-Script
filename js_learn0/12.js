const ftodo = document.querySelector(".form-todo");
const submitfrom = document.querySelector(".submit");
const text = document.querySelector("#text1");

const todo = document.querySelector(".todo-list");
const text1 = document.querySelector(".text");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

ftodo.addEventListener("submit", (e) => {
  e.preventDefault(); //imp
  const newaddtext = text.value;
  const li = document.createElement("li");
  const newinnerhtml = `<li>
  <span class="text">${newaddtext}</span>
  <div class="btn">
      <button class="btn1">
          add
      </button>
      <button class="btn2">
          remove
      </button>
  </div>
</li>`;

  li.innerHTML = newinnerhtml;
  todo.append(li);
  text.value = "";
});

todo.addEventListener("click", (e) => {
  // console.log(e.target.classList)
  if (e.target.classList.contains("btn1")) {
    console.log("add");
    const lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = "line-through";
    console.log(lispan);
  }
  if (e.target.classList.contains("btn2")) {
    console.log("remove");
    

    const lispan = e.target.parentNode.parentNode.parentNode;
    lispan.remove();

  }
});


