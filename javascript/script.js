var map;
function initMap() {

  var chi = { lat:41.8722, lng:87.6188 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: chi,
    zoom: 5,
  });

  var starbucks = new google.maps.Marker({
    position: { lat:41.8747, lng:87.6290 };
    map: map,
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
