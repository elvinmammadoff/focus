/* ----------------------------------

Name: main.js
Author: Alissio
Website: https://www.focus-slider.com
Exclusively available here: https://themeforest.net/user/alissio

------------------------------------- */





/*====================================================


	Table of Contents

		01. Gallery Slider

			+ Fade Carousel
			+ Thumb Slider
      + Control Fade and Thumb Sliders



	
====================================================*/



/*======================

	01. Gallery Slider 

========================*/


/* Fade Carousel 
-------------------------*/
var slider = new Swiper ('.gallery-slider', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  disableOnInteraction: false,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  onmouseover: {
    autoplay: false
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 992px
    992: {    
      slidesPerView: 2,
    },
    // when window width is >= 1199px
    1199: {    
      slidesPerView: 3, 
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4, 
    }
  }
});

// Stop on Hover
$('.gallery-slider .swiper-slide').hover(function(){
slider.autoplay.stop();
}, function(){
slider.autoplay.start();
});





