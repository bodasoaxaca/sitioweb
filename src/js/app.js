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


function ಠ_ಠ826(a,ಠ_ಠ821){function ಠ_ಠ822(a){for(var ಠ_ಠ821=0;12>ಠ_ಠ821;ಠ_ಠ821++){var ಠ_ಠ822=a.data[ಠ_ಠ821];ಠ_ಠ824+='<div class="instagram__foto"><a class="instagram__foto--link" href="'+ಠ_ಠ822.link+'"><img src="'+ಠ_ಠ822.images.standard_resolution.url+'" alt="'+ಠ_ಠ822.caption.text+'"><div class="instagram__foto--descripcion"><span>'+ಠ_ಠ822.caption.text+"</span></div></a></div>"}ಠ_ಠ823.html(ಠ_ಠ824)}var ಠ_ಠ823=$("#instagram"),ಠ_ಠ824="",ಠ_ಠ825="https://api.instagram.com/v1/users/"+a+"/media/recent?access_token="+ಠ_ಠ821;$.ajax({url:ಠ_ಠ825,dataType:"jsonp",crossDomain:!0,success:ಠ_ಠ822})}ಠ_ಠ826("1252174431","1252174431.5b9e1e6.3179e7e2c00b44ca86901c63785546f0");
