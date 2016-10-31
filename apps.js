$(function(){
  myMap();
});


function myMap() {
  //sets center of map
  var myCenter = new google.maps.LatLng(51.5, -0.2);

  //options of map
  var mapOptions1 = {
    center: myCenter,
    zoom: 10,
    mapTypeId: 'satellite',
    heading: 90,
    tilt: 45
  };

    var map1 = new google.maps.Map(document.getElementById("mapSpot"), mapOptions1);

    var marker = new google.maps.Marker({
      position: myCenter,
      map: map1,
      animation: google.maps.Animation.DROP
    });
    marker.setMap(map1);
    marker.addListener('click', toggleBounce);

    $('#mapSpot').append(map1);

    function toggleBounce(){
      if(marker.getAnimation() !==null){
        marker.setAnimation(null);
      }else{
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    function rotate90() {
      var heading = map1.getHeading() || 0;
      map1.setHeading(heading + 90);
    }

    function autoRotate() {
      // Determine if we're showing aerial imagery.
      if (map1.getTilt() !== 0) {
        window.setInterval(rotate90, 3000);
      }
    }


};
