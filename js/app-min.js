function mobileNav(){$(".main-nav__toggle").on("click",function(){var a=$(".mobile-menu-items").hasClass("flex");a?$(".mobile-menu-items").removeClass("flex"):$(".mobile-menu-items").addClass("flex")})}function hideNav(){var a=0,s=$(window),i=$("header");s.on("scroll",function(){var e=s.scrollTop();i.toggleClass("hidden",e>a),a=e})}function instaPics(){function a(a){for(var e=0;12>e;e++){var n=a.data[e];i+='<div class="instagram__foto"><a class="instagram__foto--link" href="'+n.link+'" target="_blank"><img src="'+n.images.standard_resolution.url+'" alt="'+n.caption.text+'"></<a><div class="instagram__foto--descripcion"><span>'+n.caption.text+"</span></div></div>"}s.html(i)}var s=$("#instagram"),i="",e="https://api.instagram.com/v1/users/1252174431/media/recent?access_token=1252174431.5b9e1e6.3179e7e2c00b44ca86901c63785546f0";$.ajax({url:e,dataType:"jsonp",crossDomain:!0,success:a})}mobileNav(),hideNav(),instaPics();