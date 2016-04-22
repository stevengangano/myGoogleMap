
var myCenter=new google.maps.LatLng(37.704785,-122.456597)

function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker=new google.maps.Marker({
  	position:myCenter,
  })
  marker.setMap(map)

  var infowindow = new google.maps.InfoWindow({
  content:"1058 Hanover St, Daly City, CA 94014"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);