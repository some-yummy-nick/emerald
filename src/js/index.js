import normalize from "normalize.css";
import hamburger from "./hamburger";
import links from "./links";
import scroll from "./scroll";
import servicesHover from "./servicesHover";

servicesHover();
scroll();
links();
hamburger();
$('.slider').slick({
  dots: true
});

var review = document.querySelectorAll(".review");
var overlay = document.querySelector(".overlay");
let close = document.querySelectorAll(".close");
let form = document.querySelectorAll(".popup__form");

review.forEach(function (item) {
  item.addEventListener("click", function () {
    let popup = this.parentNode.parentNode.querySelector(".popup");
    let close = this.parentNode.parentNode.querySelector(".success .close");
    close.classList.add("js-visible");
    close.classList.remove("js-hided");
    popup.classList.add("js-visible");
    popup.classList.remove("js-hided");
    overlay.style.height = 100 + "%";
  })
});

form.forEach(function (item, i, arr) {
  item.addEventListener("submit", function (e) {
    let success = item.parentNode.parentNode.querySelector(".success");
    let popup = item.parentNode.parentNode.querySelector(".popup");
    popup.classList.add("js-hided");
    popup.classList.remove("js-visible");
    success.classList.add("js-visible");
    success.classList.remove("js-hided");
    overlay.style.height = 100 + "%";
    e.preventDefault();
  })
});

close.forEach(function (item, i, arr) {
  item.addEventListener("click", function () {
    item.parentNode.classList.add("js-hided");
    item.parentNode.classList.remove("js-visible");
    this.classList.add("js-hided");
    overlay.style.height = 0;
  })
});