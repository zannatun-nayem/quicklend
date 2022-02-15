$(document).ready(function () {
  "use strict";

  $(".slickcenter").slick({
    dots: false,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      '<span class="fa-stack slickcenter-left-handle fa-lg"><i class="fas fa-chevron-circle-left"></i></span>',
    nextArrow:
      '<span class="fa-stack slickcenter-right-handle fa-lg"><i class="fas fa-chevron-circle-right"></i></span>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  // Slider Ranger
  if ($("#slider-range-min , #slider-range-max").length) {
    $(function () {
      $("#slider-range-min").slider({
        range: "min",
        value: 3000,
        min: 1000,
        max: 5000,
        slide: function (event, ui) {
          $("#amount").val("$" + ui.value);
        },
      });
      $("#amount").val("$" + $("#slider-range-min").slider("value"));
    });
    $(function () {
      $("#slider-range-max").slider({
        range: "min",
        min: 1,
        max: 10,
        value: 2,

        slide: function (event, ui) {
          $("#j").val(ui.value);
        },
      });
      $("#j").val($("#slider-range-max").slider("value"));
    });
  }
});
