
$(window).on("load" , function(){
//  Preloader
  $(".preloader").fadeOut();


    
    // Wow js
    new WOW().init();

// App screens Swiper
const appScreens = new Swiper('.app-screens .swiper', {
  loop: true,
  autoplay: true,
  allowTouchMove: true,
  speed : 1000,
  centeredSlides: true,
  slideToClickedSlide: true,
  draggable: true,
  navigation: {
    nextEl: ' .app-screens .swiper-button-next',
    prevEl: '.app-screens .swiper-button-prev',
  },
  pagination: {
    el: '.app-screens .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});



// Clients review swiper

const clientsReview = new Swiper(".client-reviews .swiper", {
  loop: true,
  autoplay: true,
  allowTouchMove: true,
  speed: 1000,
  draggable: true,
  navigation: {
    nextEl: " .client-reviews .swiper-button-next",
    prevEl: ".client-reviews .swiper-button-prev",
  },
  pagination: {
    el: ".client-reviews .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});



})




$(document).ready(function(){
 
  
  // fire select2
  $('.myselect').select2();

  $('.myform select').select2({
    minimumResultsForSearch: -1
  });


  
      
   






// **************************************************************************************************


// Common Questions

$(".main-question").on("click", function(){
  $(this).children(".ques-answer").slideToggle(300);
  $(this).toggleClass("active").siblings().removeClass("active");
  $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
})




// **************************************************************************************************


// fixed header

$(window).on("scroll" , function (){
  if($(window).scrollTop() > 150){
    $("header").addClass("blur-header");
    $(".logo img").attr("src" , "images/nitropt-light-logo.svg")
    if($(window).width() > 992){
      $("header").addClass("fixed-header")
    }
    if($(window).width() < 768){
      $("header").addClass("padding-8")
    }
   
  }
  if($(window).scrollTop() == 0){
    $("header").removeClass("fixed-header")
    $("header").removeClass("blur-header")
    $("header").removeClass("padding-8")
    if(!$("body").hasClass("pages-body")){
      $(".logo img").attr("src" , "images/nitropt-dark-logo.svg")
    }
   
  }
})




// open and close nav

let closeBtn = $(".closeBtn") , openBtn = $(".openBtn") ;


openBtn.on("click", function(){
  
  if($(window).width() < 992){

    if($("body").hasClass("pages-body")){
      let currentSrc = $(".logo img").attr("src");
      if (currentSrc == "images/nitropt-light-logo.svg") {
        $(".logo img").attr("src", "images/nitropt-dark-logo.svg");
      } else {
        $(".logo img").attr("src", "images/nitropt-light-logo.svg");
      }
      $(".pages-body header").toggleClass("pages-fixed-header");
    }


    if($(window).scrollTop() > 100){
      if(!$("body").hasClass("pages-body")){
        $("header").toggleClass("header-mob");
        let currentSrc = $(".logo img").attr("src");
        if (currentSrc == "images/nitropt-dark-logo.svg") {
          $(".logo img").attr("src", "images/nitropt-light-logo.svg");
        } else {
          $(".logo img").attr("src", "images/nitropt-dark-logo.svg");
        }
      }
     
    }
  
  }


  $(".navigation").slideToggle(400)
  $("body").toggleClass("overflow-hidden") ;
  $(this).children("i").toggleClass("fa-xmark");

  if($(this).children("i").hasClass("fa-xmark")){
    $(".big-menu li").addClass("opacity-100")
  }else{
    $(".big-menu li").removeClass("opacity-100")
  }
 
})



if($(window).width() < 992 ){
  $(".big-menu li a").on("click" , function(){
    $(".navigation").slideUp(400);
    $(".openBtn i").removeClass("fa-xmark");
    $("body").removeClass("overflow-hidden") ;
    if(!$("body").hasClass("pages-body")){
      $("header").removeClass("header-mob");
    }else{
      $("header").removeClass("pages-fixed-header");
      let currentSrc = $(".logo img").attr("src");
    if (currentSrc == "images/nitropt-light-logo.svg") {
      $(".logo img").attr("src", "images/nitropt-dark-logo.svg");
    } else {
      $(".logo img").attr("src", "images/nitropt-light-logo.svg");
    }
    }
  })
}


// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $(window).scrollTop(0);
}) 


// **************************************************************************************************







}) // End of document ready







