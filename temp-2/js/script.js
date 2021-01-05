$(document).ready(function(){
    var owl = $('.banner__offer .owl-carousel');
    owl.owlCarousel({
    loop: true,
    items: 3,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false,
            stagePadding: 100
        },
        1000:{
            items:3,
            nav:false,
            margin: 5,
            center: true,
            stagePadding: 100
        }
    }
    });

    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    // menu tab

    /***************************************

        #small screen

    **************************************/ 
    const mq = window.matchMedia( "(min-width: 769px)" );
    if (mq.matches) {

        $(window).scroll(function () {
            // var height = $(window).scrollTop();

            if ($(window).scrollTop() > 250) {
                $("#header-nav").removeClass("header__nav-absolute");
                $("#header-nav").addClass("header__nav-fixed");
                
            } else if ($(window).scrollTop() < 249){
                $("#header-nav").removeClass("header__nav-fixed");
                $("#header-nav").addClass("header__nav-absolute");
            }
        });
    } else {
        // window width is less than 768px
        $('.section__tab-btn').hide();

        $('#fixed__menu').click(function(){
            $('.section__tab-btn').slideToggle();
        });
        $('.section__tab-btn').click(function(){
            $(this).slideToggle();
        });
    }

    
})