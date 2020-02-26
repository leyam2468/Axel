//-Nice Scroll--------------
$("body").niceScroll({
  cursorcolor:"#860000",
  cursorwidth:"3px",
  cursorborder:"none",
  zindex: "999999",
  scrollspeed: 60,
});


 //--banner
var swiper = new Swiper('.swiper1', {
  speed: 1000,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});


//-badge Effects "cube"
var swiper1 = new Swiper('.swiper2', {
    effect: 'cube',
    grabCursor: true,
    speed:1000,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
      delay: 3000,
      waitForTransition:true
    },
  });


//-badge Effects "coverflow"
  var swiper2 = new Swiper('.swiper3', {
    speed:1000,
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
      
    },
    Sliderpagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
    },
});
