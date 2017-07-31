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
let popupClose = document.querySelectorAll(".popup__close");

review.forEach(function (item) {
  item.addEventListener("click", function () {
    let popup = this.parentNode.parentNode.querySelector(".popup");
    popup.classList.add("js-visible");
    popup.classList.remove("js-hided");
    overlay.style.height = 100 + "%";
  })
});
popupClose.forEach(function (item, i, arr) {
  item.addEventListener("click", function () {
    item.parentNode.classList.add("js-hided");
    item.parentNode.classList.remove("js-visible");
    overlay.style.height = 0;
  })
});