// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

//In the code block above:
//We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
//The mapid will reference the id tag in our <div> element on the index.html file.
//The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

//An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:

// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
//  center: [
//    40.7, -94.5
//  ],
//  zoom: 4
//});



//Changing map object to focus on LA with a zoom of 14 and updated coordinates
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//Changing marker to a circle
//L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);
//Alternately we can use circle marker function. (Can't get this to work. Works with the above code. The fill color is the reason)
L.circleMarker([34.0522, -118.2437], {
   radius: 300,
   color: "black,"
   fillColor: "#ffffa1"
}).addTo(map);


// We create the tile layer that will be the background of our map.
//'https://api.mapbox.com/styles/v1/{id}/ was replaced in the tile layer with Static Tiles API. 
//Then Removed the .png from the URL. Then Remove the id attribute and the map style reference.

// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.

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