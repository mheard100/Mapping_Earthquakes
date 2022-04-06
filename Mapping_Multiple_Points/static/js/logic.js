// add console.log to see if our code is working
console.log("working");

// Create the map object with a center (US) and zoom level
let map = L.map('mapid').setView([37.09, -95.71], 4);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "black",
        fillColor: "#FFA500"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

//Changed the tilelayer style for this index compared to first.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Let's break down what's happening in this code block:
//We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
//The following URLs appear in the parentheses of our tileLayer() method:
//The API URL with a reference to the accessToken
//The OpenStreetMap URL inside the curly braces of our tileLayer() method
//We add the maxZoom attribute and assign it a value of 18.
//We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
//We add the accessToken attribute and assign it the value of our API_KEY.
//Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.
//To change the map's style, change the map id using the list of Mapbox ids below:

//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11