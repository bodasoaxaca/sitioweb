function mobileNav() {
  $('.main-nav__toggle').on('click', function(){
    var status = $('.mobile-menu-items').hasClass('flex');
    if(status){ $('.mobile-menu-items').removeClass('flex'); }
    else { $('.mobile-menu-items').addClass('flex'); }
  });
}

mobileNav();

function hideNav() {
  var prev = 0;
  var $window = $(window);
  var nav = $('header');

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });
}

hideNav();
