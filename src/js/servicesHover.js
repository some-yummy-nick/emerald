export default function servicesHover() {
  var servicesItem = document.querySelectorAll(".services__item");
  servicesItem.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      var popup = this.querySelector(".services__hover");
      popup.classList.add("js-visible");
      popup.classList.remove("js-hided");
    })
    item.addEventListener("mouseout", function () {
      var popup = this.querySelector(".services__hover");
      popup.classList.add("js-hided");
      popup.classList.remove("js-visible");

    })
  });
}