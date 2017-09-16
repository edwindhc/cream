$(document).ready(function(){
  if (window.matchMedia("(max-width: 767px)").matches) {
    console.log(555);
    $('.photo_ins').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideWidth:278,
      slideMargin:5,
      touchEnabled: true,
      infiniteLoop: true
    });

  }
});
