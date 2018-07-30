$(document).ready(function () {

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('active');
    });

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();
    counter();

    $(window).scroll(function () {
        animation();
        counter();
    });


    //ADD HEADER STYLE ON SCROOL
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 50) {

            $('header').addClass('bg-dark py-lg-1').removeClass('py-lg-4');

        } else {
            $('header').removeClass('bg-dark py-lg-1').addClass('py-lg-4');
        }

    });


    //EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });


//counter
    function counter() {
        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();
        var position = $('.achievements').offset().top;
        if (position < scrollDown + windowHeight - 50) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {

                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }

    }
    
    
    //SHOW/HIDE SUBMENU
    
    $('.toggle-submenu').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('fa-plus fa-close');
        $(this).parent().next('.submenu').slideToggle();
    });





//SLIDER

    if ($('.owl-carousel').length > 0) {
        
        $('.lead-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            autoplay: true,
            nav:false,
            items:1

            
        });
        
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            autoplay: true,
            nav:false,
            items:1

            
        });
        
        
        
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: true,
            autoplay: true,

            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        
        $('.portfolio-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: true,
            autoplay: true,

            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


});

