$(function(){

//  slick
$('.banner_slide').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1500,
  fade: true,
  arrows: true,
  cssEase: 'linear',
  adaptiveHeight: true,
  prevArrow:'<i class="fas fa-chevron-left left"></i>',
  nextArrow:'<i class="fas fa-chevron-right right"></i>'

});


//  service slider

// $('.service_slider').slick({
//   dots: false,
//   arrows: true,
//   vertical:true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   cssEase: 'linear',
// });



   //team slider 
$('.team_text_Slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.image_slider'
});
$('.image_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.team_text_Slide',
  dots: false,
  centerMode: true,
  vertical:true,
  focusOnSelect: true,
  prevArrow:'<i class="fas fa-chevron-up prev"></i>',
  nextArrow:'<i class="fas fa-chevron-down next"></i>'
});
//  light box

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  arrows: false,
  cssEase: 'linear',
  speed: 10000
})



//  counter 

$('.counter').counterUp();


//  back  to top and nav part

$(".backto_top").click(function () {
  $("html, body").animate({
          scrollTop: 0,
      },
      1000);
});


$(window).scroll(function () {
  var scrolling = $(this).scrollTop()

  if (scrolling > 1000) {
      $(".backto_top").fadeIn(800);
  } else {
      $(".backto_top").fadeOut(800);
  }
// menu scroll
if (scrolling > 0) {
  $(".nav_bg_color").addClass("menu_bg");
} else {
  $(".nav_bg_color").removeClass("menu_bg")
}
});










});