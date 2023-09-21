// display a map using leaflet.js after the index.html is loaded
const map = L.map("map");
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.setView([43.64306309536304, -79.38716408835465], 12);
let gbcMarker = L.marker([
    43.67620902155788, -79.41028307385125,
]).addTo(map);

gbcMarker.bindPopup("George Brown College - Casa Loma Campus").openPopup();

