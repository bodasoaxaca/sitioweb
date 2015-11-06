function mobileNav() {
  $('.main-nav__toggle').on('click', function(){
    var status = $('.mobile-menu-items').hasClass('flex');
    if(status){ $('.mobile-menu-items').removeClass('flex'); }
    else { $('.mobile-menu-items').addClass('flex'); }
  });
}

mobileNav();
