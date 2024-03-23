$(document).ready(function () {
  setTimeout(() => {
    $("#preloader").addClass("d-none");
  }, 2000);
  $(".owl-carousel1").owlCarousel({
    loop: false,
    //center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // //   margin: 0,
    responsiveClass: true,
    //  // nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 2,
        nav: true,
        loop: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  });

  $(".owl-carousel2").owlCarousel({
    loop: true,
    //center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 2,
        nav: false,
        loop: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
  $(".owl-carousel3").owlCarousel({
    loop: true,
    //center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 2,
        nav: false,
        loop: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
});
