function mobileNav() {
  $('.main-nav__burger').on('click', function(){
    $('.main-nav').removeClass('shadow');
    $('.main-nav__items').css('display', 'flex');
    $('.main-nav__burger').html('Cerrar');
  });
}

mobileNav();
