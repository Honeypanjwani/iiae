(function ($) {
    "use strict";
    $(document).ready(function () {

        // Main banner
        $("#main-banner").owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true
        });
        $('#mainBanner').bind('mouseover', function (e) {
            $('#mainBanner').trigger('stop.owl.autoplay');
        });

        $('#mainBanner').bind('mouseleave', function (e) {
            $('#mainBanner').trigger('play.owl.autoplay');
        });

        if ($(window).width() < 1200) {
		  $('.form-main').removeClass('open');
		}
		else{
			$('.form-main').addClass('open');
		}
		
        //$('.form-click').addClass('open');
        $(window).scroll(function() {
          if ($(this).scrollTop() > 300) {
             $('.form-main').removeClass('open');
             $('.form-click').removeClass('open');
          } else {
              $('.form-main').addClass('open');
            $('.form-click').addClass('open');
          }
        });

        $('.form-click').click(function () {
            $('.form-main').toggleClass('open');
            $(this).toggleClass('open');
        });

        /*testimonials*/
        $(".journy-line").owlCarousel({
            stagePadding: 10,
            margin: 40,
            items: 5,
            nav: true,
            loop: false,
            navText: [
                "<i class='fa fa-angle-left'><span class='sr-only'>Prev</span></i>",
                "<i class='fa fa-angle-right'><span class='sr-only'>Next</span></i>"
            ],
            pagination: false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 480 up
                480: {
                    items: 3,
                    nav: true
                },
                992: {
                    items: 5,
                    nav: false
                }
            }
        });

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop, .topPos').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        
    });
})(jQuery);

jQuery(window).load(function () {
    // Loader show
    $('.loader').hide();

    $('#registerForm input').each(function () {
        var id = $(this).attr('id');
        if (id == 'Email') {
            $(this).attr('placeholder', 'Your Permanent Email *');
        }
    });

    var $HeaderHeight = $('#header').outerHeight();
    var $myBannerheight = $('.topBanner').height();
    var $myFormheight = $('.form-block').height();
    var $diffHeight = ($myBannerheight - $myFormheight) / 2;
    var $topPos = $diffHeight + $HeaderHeight;

    var $bannercontentheight = $('.banner-caption').height();
    var $banCntMid = ($myBannerheight - $bannercontentheight - 122);

    //var $sameFormHeight = $('.form-block .panel-body').outerHeight(); 


    $('.form-main.fixed').css("top", $topPos);
    $('.banner-caption').css({
        "margin-top": $banCntMid,
        "visibility": 'visible',
        "margin-left": '-620px',
        "display": 'block'
    });

    $('.dynamic_theme_block .nav-tabs > li.active > a').text("Subscribe Us");
    $('.dynamic_theme_block .nav-tabs > li:nth-child(2) > a').text("Enquiry");
    $('#registerBtn').text("Subscribe Us");

    $('[data-parent="#accordion"]').click(function (event) {
		var a = $('[data-parent="#accordion"]');
		setTimeout(function() {
			for (var index = 0; index < a.length; index++) {
				if (a[index].classList[0] === "collapsed") {
					a[index].parentElement.lastChild.style.display = "none";
				} else {
					a[index].parentElement.lastChild.style.display = "block";
				}
			}
		}, 10);
    });
});