
var map = L.map('map').setView([27.9944, -81.7603], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

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
