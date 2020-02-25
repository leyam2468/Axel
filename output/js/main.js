/*
var swiper1 = new Swiper('.swiper-cont .swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  
  var swiper2 = new Swiper('.swiper-cont-2 .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },Slider
    pagination: {
      el: '.swiper-pagination',
    },
});
*/
    //--banner
var swiper3 = new Swiper('.banner .swiper-container', {
    autoplay: {
        delay: 3000,},
        loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
    },
    });
