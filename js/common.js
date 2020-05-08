$(document).ready(function() {
    $(".call-phone").on("click", function(){
        $(this).toggleClass("active-call");
        $(".header-phone").slideToggle(100);
    });
  
    $(".call-prompt").on("click", function(){
      $(".prompt").toggle();
    });

    $(".price-box").on("click", function(){
      $(this).children(".convert").toggle();
    });

    $(".sentence-info-box").on("click", function(){
      $(this).children(".plan").toggle();
    });


    $(".acc-box").on("click", function(){
        $(".acc-body").slideUp(300);
        $(".acc-box").removeClass("active-body");
        $(this).addClass("active-body").children(".acc-body").slideToggle(300);
    });

    $(".call-filter").on("click", function(e){
      e.preventDefault();
      $(this).toggleClass("call-filter-active");
      $(".sub-button-hide").slideToggle(100);
      $(".hide-input-click").slideToggle(100);
    });

    $(".checkbox label").on("click", function(){
      $(this).toggleClass("active-check");
    });

    $(".select-box").on("click", function(){
      $(this).children(".arrow").toggleClass("arrow-active");
      $(this).next(".select-item-wrap").slideToggle(100);
    });


    $('.main-section').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    var $range1 = $(".js-range-slider1"),
      $inputFrom1 = $(".js-input-from1"),
      $inputTo1 = $(".js-input-to1"),
      instance1,
      min1 = 0,
      max1 = 5000,
      from1 = 0,
      to1 = 0;

    $range1.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min1,
      max: max1,
      from: 0,
      to: 5000,
      onStart: updateInputs1,
      onChange: updateInputs1
    });
    instance1 = $range1.data("ionRangeSlider");

    function updateInputs1(data) {
      from1 = data.from;
      to1 = data.to;

      $inputFrom1.prop("value", from1);
      $inputTo1.prop("value", to1);
    }

    $inputFrom1.on("input", function() {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance1.update({
        from1: val
      });
    });

    $inputTo1.on("input", function() {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance1.update({
        to1: val
      });
    });


    var $range2 = $(".js-range-slider2"),
      $inputFrom2 = $(".js-input-from2"),
      $inputTo2 = $(".js-input-to2"),
      instance2,
      min2 = 0,
      max2 = 2020,
      from2 = 0,
      to1 = 0;

      $range2.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min2,
        max: max2,
        from: 0,
        to: 2020,
        onStart: updateInputs2,
        onChange: updateInputs2
      });
      instance2 = $range2.data("ionRangeSlider");

      function updateInputs2(data) {
        from2 = data.from;
        to2 = data.to;

        $inputFrom2.prop("value", from2);
        $inputTo2.prop("value", to2);
      }

      $inputFrom2.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance2.update({
          from1: val
        });
      });

      $inputTo2.on("input", function() {
        var val = $(this).prop("value");


      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance2.update({
        to1: val
      });
    });





  var $range3 = $(".js-range-slider3"),
    $inputFrom3 = $(".js-input-from3"),
    $inputTo3 = $(".js-input-to3"),
    instance3,
    min3 = 0,
    max3 = 100000,
    from3 = 0,
    to1 = 0;

    $range3.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min3,
      max: max3,
      from: 0,
      to: 100000,
      onStart: updateInputs3,
      onChange: updateInputs3
    });
    instance3 = $range3.data("ionRangeSlider");

    function updateInputs3(data) {
      from3 = data.from;
      to3 = data.to;

      $inputFrom3.prop("value", from3);
      $inputTo3.prop("value", to3);
    }

    $inputFrom3.on("input", function() {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance3.update({
        from1: val
      });
    });

    $inputTo3.on("input", function() {
      var val = $(this).prop("value");


    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance3.update({
      to1: val
    });
  });



  var $range4 = $(".js-range-slider4"),
    $inputFrom4 = $(".js-input-from4"),
    $inputTo4 = $(".js-input-to4"),
    instance4,
    min4 = 0,
    max4 = 5000,
    from4 = 0,
    to1 = 0;

    $range4.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min4,
      max: max4,
      from: 0,
      to: 5000,
      onStart: updateInputs4,
      onChange: updateInputs4
    });
    instance4 = $range4.data("ionRangeSlider");

    function updateInputs4(data) {
      from4 = data.from;
      to4 = data.to;

      $inputFrom4.prop("value", from4);
      $inputTo4.prop("value", to4);
    }

    $inputFrom4.on("input", function() {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance4.update({
        from1: val
      });
    });

    $inputTo4.on("input", function() {
      var val = $(this).prop("value");


    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance4.update({
      to1: val
    });
  });


  var $range5 = $(".js-range-slider5"),
      $inputFrom5 = $(".js-input-from5"),
      $inputTo5 = $(".js-input-to5"),
      instance5,
      min5 = 0,
      max5 = 85000,
      from5 = 0,
      to1 = 0;

      $range5.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min5,
        max: max5,
        from: 0,
        to: 85000,
        onStart: updateInputs5,
        onChange: updateInputs5
      });
      instance5 = $range5.data("ionRangeSlider");

      function updateInputs5(data) {
        from5 = data.from;
        to5 = data.to;

        $inputFrom5.prop("value", from5);
        $inputTo5.prop("value", to5);
      }

      $inputFrom5.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance5.update({
          from1: val
        });
      });

      $inputTo5.on("input", function() {
        var val = $(this).prop("value");


      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance5.update({
        to1: val
      });
    });


    var $range6 = $(".js-range-slider6"),
      $inputFrom6 = $(".js-input-from6"),
      $inputTo6 = $(".js-input-to6"),
      instance6,
      min6 = 0,
      max6 = 28,
      from6 = 0,
      to1 = 0;

      $range6.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min6,
        max: max6,
        from: 0,
        to: 28,
        onStart: updateInputs6,
        onChange: updateInputs6
      });
      instance6 = $range6.data("ionRangeSlider");

      function updateInputs6(data) {
        from6 = data.from;
        to6 = data.to;

        $inputFrom6.prop("value", from6);
        $inputTo6.prop("value", to6);
      }

      $inputFrom6.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance6.update({
          from1: val
        });
      });

      $inputTo6.on("input", function() {
        var val = $(this).prop("value");


      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance6.update({
        to1: val
      });
    });
  
    
    $('.category-wrap-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '40px',
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2
                }
            },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.sentence-wrap-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2
                }
            },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.buy-us-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2
                }
            },
          {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
});


