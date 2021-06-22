const button = document.querySelector(".btn");
const section = document.querySelector("#section--1");
button.addEventListener("click", () => {
  section.scrollIntoView({ behavior: "smooth" });
});
