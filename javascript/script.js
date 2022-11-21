function initMap() {

  var chi = { lat:41.8722, lng:87.6188 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: chi,
  });
  // The marker, positioned at Uluru
  var starbucks = new google.maps.Marker({
    position: { lat:41.8747, lng:87.6290 };
    map: map,
  });
}

window.initMap = initMap;
