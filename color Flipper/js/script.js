const body = document.querySelector(".body");
const color = document.querySelector("#color");
const btn = document.querySelector("#btn");

const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color.textContent = "#" + randomColor;
  color.style.color = "#" + randomColor;
  body.style.backgroundColor = "#" + randomColor;
};
btn.addEventListener("click", randomColor);

