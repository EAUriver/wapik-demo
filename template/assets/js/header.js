const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".nav-mobile");
const body = document.querySelector("body");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("show-menu");
  body.classList.toggle("scroll-disable");
});

//Fixed-nav
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".nav-wrap").classList.add("fixed-nav");
  } else {
    document.querySelector(".nav-wrap").classList.remove("fixed-nav");
  }
}
