
"use strict";


// Fade out the preloader once the page has loaded
 function hidePreloader () {
   if ($('#preloader').length) {
     $('#preloader').fadeOut(); // fade out the loading animation first
     $('#loader-wrapper').delay(350).fadeOut('slow'); // then the white overlay that covers the page
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// Scroll-to-top button
function initScrollToTop () {
  if ($('.scroll-top').length) {

    // Show the button once the page is scrolled past 200px
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    // Scroll back to the top on click
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// Home banner image slider (Revolution Slider)
function initBannerSlider () {
  var banner = $("#main-banner-slider.video-slider");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:5000,
      navigation: {
          arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
         bullets: {
                  enable: false,
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,350],
                gridheight:[850,850,850,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


// One-page nav: scrollspy on the header menu and smooth scroll on its links
function initOnePageNav() {
    if($('body').length){
      // Highlight the menu item of the section in view
      $('body').scrollspy({target: ".theme-main-header", offset: 70});   

      // Smooth scroll for every link inside the one-page menu
      $(".one-page-menu li a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The scroll animation lasts 1000 ms
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    }
}

// Sticky header: add .fixed once the page is scrolled past 100px
function stickyHeader () {
  if ($('.theme-main-header').length) {
    var sticky = $('.theme-main-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}


// Mobile submenu: add an arrow icon to dropdown items that toggles their submenu
function initSubMenuToggle () {
  if($(".theme-main-header").length) {
    $('.theme-main-header li.dropdown-holder').append(function () {
      return '<i class="fa fa-angle-down"></i>';
    });
    $('.theme-main-header li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
  }
}

// Close the mobile menu after clicking a menu or submenu link
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$('.navbar-nav>li>ul>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
     initScrollToTop ();
     initBannerSlider ();
     initOnePageNav();
     initSubMenuToggle ()
  })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      hidePreloader ()
  })(jQuery);
 });
