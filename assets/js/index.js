const btntoggle = document.querySelector(".nav__humbger");
const menutoggle = document.querySelector(".nav__list");

btntoggle.addEventListener("click", function () {
  btntoggle.classList.toggle("active");
  menutoggle.classList.toggle("active");
});
