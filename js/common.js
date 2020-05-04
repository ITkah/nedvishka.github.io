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

    $('.main-section').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 5000,
    from = 0,
    to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 5000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
      from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });


    
    var $range = $(".js-range-slider-2"),
    $inputFrom = $(".js-input-from-2"),
    $inputTo = $(".js-input-to-2"),
    instance,
    min = 0,
    max = 5000,
    from = 0,
    to = 0;

    $range.ionRangeSlider({
      skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 5000,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
      from = data.from;
        to = data.to;
        
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });
    


    
    $('.category-wrap-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
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


