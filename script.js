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
	}

	
	$(document).ready( function() {
        app.initScrollFunction();
        app.initFixedHeader();
		app.initTextTyping();
        app.initLogoSlide();
		AOS.init();
	});
	
	$(window).on('load', function(){
	});

})(jQuery);
