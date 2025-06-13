// Initialize the map
var map = L.map('map').setView([27.9944, -81.7603], 7);

// Define base layers
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
});

var esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Earthstar Geographics',
  maxZoom: 19
});

// Add one of them to start
osm.addTo(map);

// Add basemap toggle control
var baseMaps = {
  "OpenStreetMap": osm,
  "Esri Satellite": esriSat
};
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON sample data
var geojsonFeature = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-81.5158, 28.3852]
  },
  "properties": {
    "name": "Sample Location",
    "popupContent": "This is a sample point in Florida."
  }
};

L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
  }
}).addTo(map);

