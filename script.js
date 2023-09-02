( function($) {

	var app = {
        initTextTyping: function(){
            var i = 0;
            var txt = 'Hi, there! I am'; /* The text */
            var speed = 100; /* The speed/duration of the effect in milliseconds */

            function typeWriter() {
                if (i < txt.length) {
                    $(".intro-title span").append(txt.charAt(i));
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            typeWriter();
        },
        initLogoSlide: function(){
            $('.logo-slick').slick({
                slidesToShow: 5,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 5000,
                cssEase: 'linear',
                dots: false,
                arrows: false,
                infinite: true,
                responsive: [{

                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                  }

                },
                            {

                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                  }

                }]
            });
        },
        initScrollFunction: function() {
			$('.main-nav ul li:first-child a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#intro').offset().top - 132}, 500);
			});
			$('.main-nav ul li:nth-child(2) a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#about').offset().top - 132}, 500);
			});
            $('.main-nav ul li:nth-child(3) a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#projects').offset().top - 132}, 500);
			});
			$('.main-nav ul li:last-child a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#contact').offset().top - 132}, 500);
			});
		},
        initFixedHeader :function(){
			$(window).scroll(function () {
				if ( window.innerWidth > 991 && $(this).scrollTop() > 90 ) {
				  $('.header').addClass('fixed');
				  
				 } else  {
				  $('.header').removeClass('fixed');
				  
				}
			
			
			  }); 
		},
        initProjectsSlick: function(){
            function yourFunction() {
                $('.projects-slick').not(".slick-initialized").slick({
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    infinite: true,
                    fade: false,
                });
            }

            function checkScreenWidthAndExecute() {
                if ($(window).width() < 992) {
                    yourFunction();
                }
            }

            // Call the function initially and add a resize event handler
            checkScreenWidthAndExecute();

            $(window).on('resize', function() {
            if ($(window).width() >= 992) {
              // Screen size is 992 pixels or above, so do not execute the function
              return;
            }

            // Screen size is below 992 pixels, so execute the function
            checkScreenWidthAndExecute();
            });
            
        },
        
	}

	
	$(document).ready( function() {
        app.initScrollFunction();
        app.initFixedHeader();
		app.initTextTyping();
        app.initLogoSlide();
		AOS.init();
        app.initProjectsSlick();
	});
	
	$(window).on('load', function(){
	});

})(jQuery);
