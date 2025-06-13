
var map = L.map('map').setView([27.9944, -81.7603], 7);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Earthstar Geographics',
  maxZoom: 19
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
