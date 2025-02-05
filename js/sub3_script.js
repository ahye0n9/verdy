$(function(){
  $('.board li a').click(function(){
    $(this).parent().addClass('on').siblings().removeClass('on')
  });
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

});
