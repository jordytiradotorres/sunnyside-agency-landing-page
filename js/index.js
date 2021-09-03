const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__navigation");

hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("show");
});

document.body.addEventListener("click", (e) => {
  if (e.target.className === "header__link") {
    nav.classList.remove("show");
  }
});
