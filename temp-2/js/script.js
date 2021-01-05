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
    
})