$(".anser").hide();
$(".question").click(function(){
    $(this).next().slideToggle()

// $(".question").click(function(){
//     $(this).children().children('img').toggleClass('turn')
// });

$(this).toggleClass("open");

$(this).children().children("img").toggleClass("turn");
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".up", {
  x: 0,
  y: -46,
  scrollTrigger: {
      trigger: "#container2",
      start: "-800px top",
      end: "bottom 100%",
      scrub: 5,
      markers: false,
  }
});
gsap.to(".down", {
  x: 0,
  y: 46,
  scrollTrigger: {
      trigger: "#container2",
      start: "-800px top",
      end: "bottom 100%",
      scrub: 5,
      markers: false,
  }
});
