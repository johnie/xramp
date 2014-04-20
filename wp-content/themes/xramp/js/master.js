function fullHeight(element) {
  $(element).css({
    "height" : $(window).height() + "px"
  });
}

function skewLeft(element) {
  $(element).css({
    "border-left-width" : parseInt($(window).width()) + "px"
  });
}

function skewRight(element) {
  $(element).css({
    "border-right-width" : parseInt($(window).width()) + "px"
  });
}

jQuery(document).ready(function($) {
  fullHeight(".header");
  skewLeft(".skew--top");
  skewRight(".skew--bottom");

  $(".menu-btn").click(function(){
    $(".site").toggleClass('menu-open');
    $("html").toggleClass('overflow--hidden');
  });
});

$(window).resize(function(event) {
  fullHeight(".header");
  skewLeft(".skew--top");
  skewRight(".skew--bottom");
});
