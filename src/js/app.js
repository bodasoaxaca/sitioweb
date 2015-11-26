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


function instaPics () {
  // Seleccionamos el div donde vamos a pinches trabajar
  var insta = $('#instagram');
  var html = '';
  // Definimos el URL del API de instagram
  var url = 'https://api.instagram.com/v1/users/1252174431/media/recent?access_token=1252174431.5b9e1e6.3179e7e2c00b44ca86901c63785546f0';

  // Este es el loop que va a construir todo el HTML con las fotos y así, mu.
  function loop (fotos) {
    for (var i = 0; i<12; i++) {
      var fotoActual = fotos.data[i];
      html+= '<div class="instagram__foto">'
      + '<a class="instagram__foto--link" href="'
      + fotoActual.link
      + '" target="_blank">'
      + '<img src="'
      + fotoActual.images.standard_resolution.url
      + '" alt="'
      + fotoActual.caption.text
      + '">'
      + '</<a>'
      + '<div class="instagram__foto--descripcion">'
      + '<span>'
      + fotoActual.caption.text
      + '</span>'
      +'</div></div>';
    }
    insta.html(html);
  }

  $.ajax({
    url: url,
    dataType: 'jsonp',
    crossDomain: true,
    success: loop
  });

}

instaPics();
