setInterval(function(){
  $('.header_img .slide').delay(2000);
  $('.header_img .slide').animate({
    marginLeft: '-1920px'
  },500);
  $('.header_img .slide').delay(2000);
  $('.header_img .slide').animate({
    marginLeft: '-3840px'
  },500);
  $('.header_img .slide').delay(2000);
  $('.header_img .slide').animate({
    marginLeft: '-5760px'
  },500);
  $('.header_img .slide').animate({
    marginLeft: '0px'
  },0);
});

$(function(){
  $("#button1").click(function(){

      $(".img1").fadeIn().siblings().fadeOut();
  });	
  $("#button2").click(function(){

      $(".img2").fadeIn().siblings().fadeOut();
  });	
  $("#button3").click(function(){

      $(".img3").fadeIn().siblings().fadeOut();
  });	
  $("#button4").click(function(){

      $(".img4").fadeIn().siblings().fadeOut();
  });	
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 19,
    slidesToScroll: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  $(function(){
    $('.button li').click(function(){
      $(this).addClass('on').siblings().removeClass('on')
    });
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 19,
    slidesToScroll: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 6,
    spaceBetween: 15,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 10000,

});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".up", {
  x: 0,
  y: -40,
  scrollTrigger: {
      trigger: ".content4",
      start: "top 20%",
      end: "bottom 80%",
      scrub: 5,
      markers: false,
  }
});
gsap.to(".down", {
  x: 0,
  y: 40,
  scrollTrigger: {
      trigger: ".content4",
      start: "top 20%",
      end: "bottom 80%",
      scrub: 5,
      markers: false,
  }
});
