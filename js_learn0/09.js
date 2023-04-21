const btn = document.getElementById("btn");
const body = document.querySelector("body");
const span = document.querySelector("span");

function reandomcolor() {
  const rendr = Math.floor(Math.random() * 256);
  const rendg = Math.floor(Math.random() * 256);
  const rendb = Math.floor(Math.random() * 256);
  return `rgb(${rendr},${rendg},${rendb})`;
}

btn.addEventListener("click", () => {
  const val = reandomcolor();
  body.style.backgroundColor = val;
  span.textContent = val;
});
