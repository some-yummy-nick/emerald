export default function scroll() {
  $(document).ready(function(){
    $("a").on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
if($(this).attr('href') !== "javascript:void()"){
  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
}

    });
  });
}