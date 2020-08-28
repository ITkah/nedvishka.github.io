$(document).ready(function() {
    $(".call-phone").on("click", function() {
        $(this).toggleClass("active-call");
        $(".header-phone").slideToggle(100);
    });

    $('.click-tab').click(function() {
        $('body, html').animate({
            scrollTop: $('.click-tab').offset().top + 100
        }, 700);
    });


    $(".btn-fiter").on("click", function() {
        $(".btn-fiter").removeClass("active");
        $(this).addClass("active");
    });

    $(".icon-call").on("click", function() {
        $(".info").fadeToggle(100);
    });

    $(".short-text").on("click", function() {
        $(this).toggleClass("arrow-rotate");
        $(this).next(".shrot-hide-item").fadeToggle(100);
    });

    $(".question-call").on("click", function(e) {
        e.preventDefault();
        $(this).next(".modal-box-input").slideToggle(200);
    });

    $(".qviz-title-box").on("click", function() {
        $(".warning").slideToggle(100);
    });


    $(".catalog-list-btn").on("click", function() {
        $(this).toggleClass("active-plitka");
        $(".catalog-wrap").toggleClass("plitka-catalog");
        $('.plitka-catalog .sentence-img-slider').slick({
            dots: true,
            arrows: true,
            prevArrow: '<svg width="42" height="45" viewBox="0 0 42 45" class="prev" xmlns="http://www.w3.org/2000/svg"><g><path d="M29.7531 6.12679C28.8956 5.23716 27.5131 5.23716 26.6556 6.12679L12.1131 21.2142C11.4306 21.9223 11.4306 23.0661 12.1131 23.7742L26.6556 38.8616C27.5131 39.7512 28.8956 39.7512 29.7531 38.8616C30.6106 37.972 30.6106 36.5377 29.7531 35.648L17.0831 22.4851L29.7706 9.3222C30.6106 8.45072 30.6106 6.99826 29.7531 6.12679Z" /><path d="M29.7531 6.12679C28.8956 5.23716 27.5131 5.23716 26.6556 6.12679L12.1131 21.2142C11.4306 21.9223 11.4306 23.0661 12.1131 23.7742L26.6556 38.8616C27.5131 39.7512 28.8956 39.7512 29.7531 38.8616C30.6106 37.972 30.6106 36.5377 29.7531 35.648L17.0831 22.4851L29.7706 9.3222C30.6106 8.45072 30.6106 6.99826 29.7531 6.12679Z"  fill-opacity="0.5"/></g></svg>',
            nextArrow: '<svg width="44" height="45" viewBox="0 0 44 45" class="next" xmlns="http://www.w3.org/2000/svg"><path d="M12.8294 38.8615C13.7277 39.7512 15.176 39.7512 16.0744 38.8615L31.3094 23.7741C32.0244 23.066 32.0244 21.9222 31.3094 21.2141L16.0744 6.12673C15.176 5.2371 13.7277 5.2371 12.8294 6.12673C11.931 7.01636 11.931 8.45066 12.8294 9.34029L26.1027 22.5032L12.811 35.6661C11.931 36.5376 11.931 37.99 12.8294 38.8615Z" /><path d="M12.8294 38.8615C13.7277 39.7512 15.176 39.7512 16.0744 38.8615L31.3094 23.7741C32.0244 23.066 32.0244 21.9222 31.3094 21.2141L16.0744 6.12673C15.176 5.2371 13.7277 5.2371 12.8294 6.12673C11.931 7.01636 11.931 8.45066 12.8294 9.34029L26.1027 22.5032L12.811 35.6661C11.931 36.5376 11.931 37.99 12.8294 38.8615Z" /></svg>',
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });


    $(".menu").on("click", function() {
        $("nav").addClass("nav-active");
    });

    $(".close").on("click", function() {
        $("nav").removeClass("nav-active");
    });

    $(".call-prompt").on("click", function() {
        $(".prompt").toggle();
    });

    $(".price-box").on("click", function() {
        $(this).children(".convert").toggle();
    });

    $(".sentence-info-box").on("click", function() {
        $(this).children(".plan").toggle();
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $('.header-active').addClass("fixed-animate");
            $('main').addClass("main-top");
        } else {
            $('.header-active').removeClass("fixed-animate");
            $('main').removeClass("main-top");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('.header-active').addClass("fixed-animate-2");
        } else {
            $('.header-active').removeClass("fixed-animate-2");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 320) {
            $('.header-active').addClass("fixed-header");
        } else {
            $('.header-active').removeClass("fixed-header");
        }
    });

    $('.acc-head').on("click", function() {
        $('.acc-body').not($(this).next()).slideUp(200).siblings(".acc-head").removeClass("acc-head-active").parent().removeClass("active-body");
        $(this).toggleClass("acc-head-active").next().slideToggle(200).parent().toggleClass("active-body");
    });

    $(".call-filter").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("call-filter-active");
        $(".sub-button-hide").slideToggle(100);
        $(".hide-input-click").slideToggle(100);
    });

    $(".qviz-radio").on("click", function() {
        $(".qviz-radio").removeClass("active-check");
        $(this).addClass("active-check");
    });

    $(".select-box").on("click", function() {
        $(this).children(".arrow").toggleClass("arrow-active");
        $(this).next(".select-item-wrap").slideToggle(100);
    });


    $(".call-search").on("click", function() {
        $(".hide-elem").toggleClass("hide-active");
        $(".search").fadeToggle(200);
    });


    $('.single').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        fade: true,
        cssEase: 'linear'
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('div.sub-menu').on('click', 'p:not(.active-sub)', function() {
        $(this)
            .addClass('active-sub').siblings().removeClass('active-sub')
            .closest('div.sub-menu').find('div.sub-tab-box').removeClass('sub-tab-box-active').eq($(this).index()).addClass('sub-tab-box-active');
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
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    $('.slick-area').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.sentence-wrap-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '40px',
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1600,
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
                breakpoint: 620,
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
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.compare-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    jQuery(window).scroll(function() {
        var the_top = jQuery(document).scrollTop();
        if (the_top > 250) {
            jQuery('.simple-block .simple-form-favorite').addClass('fixed');
        } else {
            jQuery('.simple-block .simple-form-favorite').removeClass('fixed');
        }
    });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        },
    });

});