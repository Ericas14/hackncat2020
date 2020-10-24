//let map;

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.044659, lng: -79.7920 },
    zoom: 8,
  });
}

function findlocation(){
    var loc = document.getElementById("loc").value;
    console.log(loc);
}