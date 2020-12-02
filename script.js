// PARALLAX
$.fn.scrollBottom = function() {
  return $(window).height() - this.scrollTop() - this.height();
};

$(window).scroll(function (){

  // PARALLAX
  if($(window).width() > 1199.98){
    $(".bg-img-header").css("background-position","20%" + ($(this).scrollBottom() / 2) + "px");
  }
  // $(".bg-img-hypnose").css("background-position","20%" + ($(this).scrollBottom() / 32) + "px");

  $('.q, .u, .i, .s, .u2, .i2, .s2, .tiret, .j, .e, .interogation').css('opacity', '0');

  var scroll = $(window).scrollTop();
  var scrollBottom = $(window).scrollBottom();

  // ANIMATIONS ON SCROLL
  $(function animating(){
    if (scroll >= $('#presentation').offset().top - 600){
        $('.q').animate({opacity: 1}, 200, function(){
          $('.u').animate({opacity: 1}, 200, function(){
            $('.i').animate({opacity: 1}, 200, function(){
              $('.s').animate({opacity: 1}, 200, function(){
                $('.u2').animate({opacity: 1}, 200, function(){
                  $('.i2').animate({opacity: 1}, 200, function(){
                    $('.s2').animate({opacity: 1}, 200, function(){
                      $('.tiret').animate({opacity: 1}, 200, function(){
                        $('.j').animate({opacity: 1}, 200, function(){
                          $('.e').animate({opacity: 1}, 200, function(){
                            $('.interogation').animate({opacity: 1});
                          })
                        })
                      })
                    })
                  })
                })
              })
            });
          })
        });
    }
  }).stop();

  if($(window).width() > 1198.98){
    $(function(){
      if (scroll >= $('#hypnose').offset().top - 400){
        $('.cardH').animate({
            'marginTop': '0',
            'opacity': 1
          }, 1000, function() {
            // Animation complete.
          });
      }
    });

    $(function fadeDown(){
      if (scroll >= $('#services').offset().top - 400){
        $('.cardS').animate({
            'marginTop': '0',
            'opacity': 1
          }, 1000, function() {
            // Animation complete.
          });
      }
    });

    $(function(){
      if (scroll >= $('#methode').offset().top - 400){
        $('.cardM').animate({
            'marginLeft': '0',
            'opacity': 1
          }, 1000, function() {
            // Animation complete.
          });
      }
    });

    $(function(){
      if (scroll >= $('#temoignages').offset().top - 400){
        $('.card').animate({
            'opacity': 1
          }, 1000, function() {
            // Animation complete.
          });
      }
    });
  }
  // BACKGROUND PICTURE BEHAVIOR SMALL DEVICES
  // if($(window).width() < 1200){
  //   $(function(){
  //     if (scroll < $('#hypnose').offset().top){
  //       $('#sm2').hide();
  //       $('#sm').hide();
  //       $('#sm').removeClass('bg-image-sm');
  //       $('#sm2').show();
  //       $('#sm2').addClass('bg-image-sm');
  //       $(function(){
  //         if (scroll < $('#presentation').offset().top){
  //           $('#sm2').hide();
  //           $('#sm2').removeClass('bg-image-sm');
  //           $('#sm').show();
  //           $('#sm').addClass('bg-image-sm');
  //           $(function(){
  //
  //           })
  //         }
  //       })
  //     }
  //     if (scroll > $('#sm3').offset().top - 400){
  //       $('#sm3').hide();
  //       $('#sm2').hide();
  //       $('#sm2').removeClass('bg-image-sm');
  //       $('#sm3').show();
  //       $('#sm3').addClass('bg-image-sm');
  //     }
  //     if (scroll < $('#methode').offset().top - 400){
  //       $('#sm3').hide();
  //       $('#sm3').removeClass('bg-image-sm');
  //       $('#sm2').show();
  //       $('#sm2').addClass('bg-image-sm');
  //     }
  //   })
  // }

});

// SCROLL SMOOTH

$(".nav-link, .button1, .btn-link").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 2000, function(){

      window.location.hash = hash;
    });
  }
});



// // Get the header
window.onscroll = function(){
  navbarStickyOnScroll()
};

let navbar = document.getElementById("navbar");
let presentation = document.getElementById("presentation");

// // // Get the offset position of the navbar
let sticky = navbar.offsetTop;

// // // When the user scrolls the page, execute myFunction
function navbarStickyOnScroll() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-top");
  } else {
    navbar.classList.remove("sticky-top");
  }
};

$(function cardSHover(){
  $('.cardS-cas').hover(function(){
    $(this).removeClass('border');
    $(this).addClass('shadow');
  }, function(){
    $(this).removeClass('shadow');
    $(this).addClass('border');
  })
});

$(function(){
  $('.cardIJ').hide();
  $('.ici').click(function(event){
    $('.cardIJ').show();
    $('.cliquez').animate({paddingBottom: 0});
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        window.location.hash = hash;
      });
    }
  })
})

// NAVBAR VERTICAL BEHAVIOR

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$('#navbar-vertical').hide();

$('.hamburger').on('click', function(event){
  event.preventDefault();
  $('#navbar-vertical').animate({width: 'toggle'}, 300, 'linear');
});

// READ THE FOLLOWING ON SMALL SCREEN

if($(window).width() < 768){
  $('.lire-la-suite').on('click', function(){
    $('.lire-la-suite').hide();
    $('.text-suite').show();
  });

  $('.lire-la-suite2').on('click', function(){
    $('.lire-la-suite2').hide();
    $('.text-suite2').show();
  });

  $('.lire-la-suite3').on('click', function(){
    $('.lire-la-suite3').hide();
    $('.text-suite3').show();
  });
}

//LAZY LOAD
  $(function() {
      $('img').loadScroll(100);
      $('iframe').loadScroll(100);
  });


// LAZY LOAD BACKGROUND PICTURE

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


// MONTRER PLUS DE TEMOIGNAGES ET TARIFS

$('.plus-temoignages').on('click', function(){
  $('.plus-temoignages').hide();
  $('.cardTHidden').show();
})

$('.plus-tarifs').on('click', function(){
  $('.plus-tarifs').hide();
  $('.cardTarHidden').show();
})
