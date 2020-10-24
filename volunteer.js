//var address = document.getElementById("address").value;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    });
    const geocoder = new google.maps.Geocoder();
    document.getElementById("submit").addEventListener("click", () => {
      geocodeAddress(geocoder, map);
    });
  }
  
  function geocodeAddress(geocoder, resultsMap) {
     var address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  function addEventCards() {
    var address = document.getElementById("address").value;
      console.log(address);
    if(address == "NCAT"){
        addNCATEventCards();
    }
    else{
        addUNCGEventCards();
    }
  }

  function addNCATEventCards(){
    const ncatevents =
        ['NCAT1', 'NCAT2', 'NCAT3', 'NCAT4'];
    var randomFact = "";
    for( i = 0; i<ncatevents.length;i++){
        randomFact = randomFact+ "\n" + ncatevents[i];
    }
    // Add it to the page.
    const factContainer = document.getElementById('card-container');
    factContainer.innerText = randomFact;
  }

  function addUNCGEventCards(){
    const uncgevents =
    ['UNCG1', 'UNCG2', 'UNCG3', 'UNCG4'];
var randomFact = "";
for( i = 0; i<uncgevents.length;i++){
    randomFact = randomFact+ "\n" + uncgevents[i];
}
// Add it to the page.
const factContainer = document.getElementById('card-container');
factContainer.innerText = randomFact;
}