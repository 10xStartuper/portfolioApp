(function ($) {
    'use strict';


    if ($(".contact-form-validated").length) {
        $(".contact-form-validated").validate({
            // initialize the plugin
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                message: {
                    required: true,
                },
                subject: {
                    required: true,
                },
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post(
                    $(form).attr("action"),
                    $(form).serialize(),
                    function (response) {
                        $(form).parent().find(".result").append(response);
                        $(form).find('input[type="text"]').val("");
                        $(form).find('input[type="email"]').val("");
                        $(form).find("textarea").val("");
                    }
                );
                return false;
            },
        });
    }



    //===== 01. Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function () {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function () {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function () {
            breakpointCheck();
        });
    };

    // Document Ready
    $(document).ready(function () {
        mainMenu();
    });
    // Panel Widget
    var panelIcon = $('.off-menu'),
        panelClose = $('.panel-close'),
        panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function (e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function (e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    //===== Prealoder
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut('500');
    })

    //===== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //==== slick slider
    $('.testimonial-slider-one').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-two').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $('.case-slider-one').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    //   counter js
    $('.counter').counterUp({
        delay: 80,
        time: 4000
    });

    //===== Isotope js
    $('.case-masonry-grid').imagesLoaded(function () {
        // items on button click
        $('.portfolios-list').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.portfolios-list li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.case-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });

    //===== nice-select
    $('select').niceSelect();

    $("a.page_scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            scrollToPosition(hash);
        }
    });

    function scrollToPosition(hash) {
        //Initialize Active Class
        $('body,html').animate({
            start: function () {},
            scrollTop: $(hash).offset().top,
        }, 1000, function () {
            window.location.hash = hash;
        });
    }

    // Wow js
    new WOW().init();

})(window.jQuery);