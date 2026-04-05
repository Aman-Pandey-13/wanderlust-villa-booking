// map.js
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: listing.coordinates, // [lng, lat]
  zoom: 13
});

// Add zoom + rotation controls
map.addControl(new mapboxgl.NavigationControl());

// Add marker with popup
new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h5>${listing.title}</h5><p>${listing.location}</p>`
    )
  )
  .addTo(map);
