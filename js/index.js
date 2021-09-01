const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__navigation");

hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("show");
});
