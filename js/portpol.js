$(function () {
  /* aos js */
  AOS.init();
  /* header active */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("header, .top-btn").addClass("active");
    } else {
      $("header, .top-btn").removeClass("active");
    }
  });
  /* header-navi-btn */
  $(".trigger").click(function () {
    $("nav").toggleClass("active");
    $(this).toggleClass("active");
  });
  $("section").click(function () {
    $(".trigger").removeClass("active");
    $("nav").removeClass("active");
  });
  /* personal slide */
  $('.personal-slide-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});/* end : jquery */
