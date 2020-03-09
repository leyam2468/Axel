//-Nice Scroll--------------
$("body").niceScroll({
  cursorcolor:"#860000",
  cursorwidth:"3px",
  cursorborder:"none",
  zindex: "999999",
  scrollspeed: 60,
});


//- a link smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
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
    speed:500,
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
      delay: 1000,
    },
});


//-portfolio
$(document).ready(function(){

  let $btns=$('.portfolio-area .button-group button');

  $btns.click(function(e){

    $('.portfolio-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
      $('.portfolio-area .grid').isotope ({
        filter:selector
      });

    return false
  })
  $('.portfolio-area .button-group #btn1').trigger('click');


  $('.portfolio-area .grid .our-progect .popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });


//-Client Area
  $('.other-say .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      544:{
        items:2
      }
    }
  });
});
