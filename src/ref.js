/* -------------------------=[ Creatio Script ]=------------------------- */

var screenSize;

$(document).ready(function () {
  // [ WINDOW WIDTH - RESIZE TRACKER ]
  screenSize = $(window).width();
  $(window).resize(function () {
    screenSize = $(window).width();
  });

  // [ GLOBAL CROSS BROWSER <select> PLACEHOLDER & COLOR FIX ]
  $("select").addClass("noValue");
  $("select").on("change", function () {
    if ($(this)[0].selectedIndex == 0) {
      $(this).addClass("noValue");
    } else {
      $(this).removeClass("noValue");
    }
  });

  // [ SCROLL TO ]
  $(".go-to").on("click", function () {
    var location = $(this).data().location;
    $("html,body").animate(
      { scrollTop: $("." + location).offset().top - 50 },
      700
    );
  });

  // [ FIXED THE NAVIGATION ON SCROLL ]
  var nav = $(".navigation");
  $(window).scroll(function () {
    if (screenSize >= 768) {
      if ($(window).scrollTop() >= 56) {
        nav.addClass("fixed-nav");
        $(".nav-container").css("padding-top", "145px");
      } else {
        nav.removeClass("fixed-nav");
        $(".nav-container").css("padding-top", "0");
      }
    }
  });

  // [ WORK DROPDOWN ]
  $(".work-listing .responsive-dropdown").on("click", function () {
    $(this).find(".icon").toggleClass("flip-icon");
    $(this).next("ul").slideToggle();
    $("html,body").animate({ scrollTop: $(this).offset().top - 100 }, 500);
  });

  // -----------------------------=[ LIGHTBOX ]=-----------------------------------

  // var getTargetHTML = function getTargetHTML(elem) {
  //     var id = elem.getAttribute('data-show-id');
  //     var target = document.querySelector('[data-id="' + id + '"]');
  //     return target.outerHTML;
  // };

  // document.querySelectorAll('[data-show-id]').forEach(function (elem) {
  //     var html = getTargetHTML(elem);
  //     elem.onclick = basicLightbox.create(html).show;
  // });

  // [ FORCE CLOSE THE LIGHTBOX ]
  // $("body").on("click", ".close-lightbox", function(){
  //     var lightbox = $(".basicLightbox");

  //     $("body").removeClass("no-scroll");

  //     lightbox.removeClass("basicLightbox--visible");
  //     setTimeout(function(){
  //         lightbox.remove();
  //     }, 410);
  // });

  // -----------------------------=[ RESPONSIVE ]=-----------------------------------

  // [ SHOW HIDE RESPONSIVE MENU ]
  $(".responsive-menu").on("click", function () {
    $(this).toggleClass("open");
    // $(this).parent(".logo-menu-container").toggleClass("no-shadow");
    $("body").toggleClass("no-scroll");
    $(".nav-container .nav-right").slideToggle();
  });

  // navigation dropdown
  $(".has-dropdown > a").on("click", function (e) {
    if (screenSize <= 767) {
      e.preventDefault();
      $(this).parent(".has-dropdown").toggleClass("open");
      $(this).next(".dropdown").slideToggle();
    }
  });
});
