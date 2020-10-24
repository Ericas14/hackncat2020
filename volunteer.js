var map;
var events = [];
var markerList = [];
function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat:36.044659, lng:-79.766235 },
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
    ncatobjects();
    const ncatevents = events;
    deleteli();
    var factContainer = "";
    factContainer = document.getElementById('card-container');
    addToPage(ncatevents,ncatevents.length);
    ncatMarkers();
  }

  function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
  }

  function addUNCGEventCards(){
    uncgobjects();
    const uncgevents = events;
    deleteli();
    var factContainer = "";
    factContainer = document.getElementById('card-container');
    addToPage(uncgevents,uncgevents.length);
    uncgMarkers();
  }

  function addToPage(events,length){
    factContainer = document.getElementById('card-container');
    for( i = 0; i<length;i++){
        factContainer.appendChild(createListElement( events[i].name + "\n\n" +
                                "Date: " + events[i].date + "\n\n" +
                                "Description: " + events[i].description + "\n\n" +
                                "Organization: " + events[i].organizaton + "\n\n" +
                                "Tags: " + events[i].tags + "\n\n"));
    }
  }

function ncatobjects(){
    removePrevious();
    var event1 ={
        name: "Canned-food Drive",
        date:"10/24/2020",
        location:{lat:36.077497,lng: -79.774961},
        description:"This saturday, please drop off your un-used canned-goods!",
        organizaton:"COP",
        tags:["in-person","donate"]
    }

    events.push(event1);

    var event2 ={
        name: "Local Cleanup",
        date:"10/25/2020",
        location:{lat:36.081141, lng:-79.770000},
        description:"Over the years, this area has been polluted heavily and is unrecognizable. Please help us clean this area this sunday.",
        organizaton:"ACM",
        tags:["recycle","cleanup","in-person"]
    }

    events.push(event2);

    var event3 ={
        name: "Handmade Mask drop-off",
        date:"10/24/2020",
        location:{lat:36.073590, lng:-79.769955},
        description:"Drop off your handmade masks here! Please read our guidelines to see what type of handmade masks we accept. Masks that violate those guidlines will not be accepted!! ",
        organizaton:"NSBE",
        tags:["covid", "at-home", "drop-off","donate"]
    }

    events.push(event3);

    var event4 ={
        name: "Walkathon to End Cancer",
        date:"10/25/2020",
        location:{lat:36.073906,lng: -79.789448},
        description:"This saturday, please help us raise money to end cancer by joining this walkathon",
        organizaton:"UPE",
        tags:["walkathon","caner","in-person"]
    }
    events.push(event4);
}

function uncgobjects(){
    removePrevious();
    var event1 ={
        name: "Homemade blanket and quilt drop-off",
        date:"10/24/2020",
        location:{lat:36.070413, lng:-79.807700},
        description:"This saturday, please drop off your handmade blankets and quilts! For more information, visit our guidelines",
        organizaton:"ACM",
        tags:["at-home","donate","drop-off"]
    }

    events.push(event1);

    var event2 ={
        name: "Donate Recyclable Materials",
        date:"10/25/2020",
        location:{lat:36.070863, lng:-79.813684},
        description:"Bring your recyclable waste such as aluminum cans, glass and plastic bottles, etc. this sunday to donate for a better world!",
        organizaton:"COP",
        tags:["recycle","donate","in-person","drop-off"]
    }

    events.push(event2);

    var event3 ={
        name: "Handmade Mask drop-off",
        date:"10/24/2020",
        location:{lat:36.071280, lng:-79.810865},
        description:"Drop off your handmade masks here! Please read our guidelines to see what type of handmade masks we accept. Masks that violate those guidlines will not be accepted!! ",
        organizaton:"NSBE",
        tags:["covid", "at-home", "drop-off","donate"]
    }

    events.push(event3);

    var event4 ={
        name: "Walkathon to End Cancer",
        date:"10/25/2020",
        location:{lat:36.067672, lng:-79.813298},
        description:"This saturday, please help us raise money to end cancer by joining this walkathon",
        organizaton:"UPE",
        tags:["walkathon","caner","in-person"]
    }
    events.push(event4);
}

function ncatMarkers(){
    const canned = new google.maps.Marker({
        position: {lat:36.077497,lng: -79.774961},
        map: map,
        title: 'Canned-food Drive'
      });
      markerList.push(canned);

      const cleanup = new google.maps.Marker({
        position: {lat:36.081141, lng:-79.770000},
        map: map,
        title: 'Local Cleanup'
      });
      markerList.push(cleanup);

      const mask = new google.maps.Marker({
        position: {lat:36.073590, lng:-79.769955},
        map: map,
        title: 'Handmade Mask drop-off'
      });
      markerList.push(mask);

      const walkathon = new google.maps.Marker({
        position: {lat:36.073906,lng: -79.789448},
        map: map,
        title: 'Walkathon to End Cancer'
      });
      markerList.push(walkathon);
}

function uncgMarkers(){
    const blanket = new google.maps.Marker({
        position: {lat:36.070413, lng:-79.807700},
        map: map,
        title: 'Homemade blanket and quilt drop-off'
      });
      markerList.push(blanket);

      const recycle = new google.maps.Marker({
        position: {lat:36.070863, lng:-79.813684},
        map: map,
        title: 'Donate Recyclable Materials'
      });
      markerList.push(recycle);

      const mask = new google.maps.Marker({
        position: {lat:36.071280, lng:-79.810865},
        map: map,
        title: 'Handmade Mask drop-off'
      });
      markerList.push(mask);

      const walkathon = new google.maps.Marker({
        position: {lat:36.067672, lng:-79.813298},
        map: map,
        title: 'Walkathon to End Cancer'
      });
      markerList.push(walkathon);
}

function removePrevious(){
    events = [];
}

function deleteli(){
    var myList = document.getElementById('card-container');
    myList.innerHTML = '';
}