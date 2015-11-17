new Maplace({

    locations: [{
        lat: 17.036088,
        lon: -96.713684,
        zoom: 18,
        title : 'Bodas Oaxaca',
        html : '<h3>Bodas Oaxaca</h3> <p>Fresnito, 206 Local 3 Col. Ex-Hacienda Candiani 71233 Oaxaca, Mexico</p>'
    }],
    map_options : {
								scrollwheel : false,
								mapTypeControl : false,
								zoomControlOptions : {
									style : google.maps.ZoomControlStyle.SMALL
								        }
							  }

  })
  .Load();

$(document).ready(function(){
  $('#contacto').focus();
});
